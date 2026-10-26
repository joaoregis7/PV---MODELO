// IndexedDB helper to store and load uploaded toy images permanently in the browser

const DB_NAME = 'ReiDoTenebrioToyImages';
const STORE_NAME = 'toy_images';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'slug' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveToyImage(slug: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({ slug, dataUrl, updatedAt: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.error('Failed to save image to IndexedDB', err);
  }
}

export async function getAllToyImages(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const results = req.result as { slug: string; dataUrl: string }[];
        const map: Record<string, string> = {};
        results.forEach((item) => {
          map[item.slug] = item.dataUrl;
        });
        resolve(map);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Failed to get images from IndexedDB', err);
    return {};
  }
}

export async function clearAllToyImages(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.error('Failed to clear images in IndexedDB', err);
  }
}

// Normalize strings for matching (remove accents, lowercase, remove spaces)
export function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export function matchSlugFromFilename(filename: string): string | null {
  const norm = normalizeKey(filename);
  if (norm.includes('tubara')) return 'tubarao';
  if (norm.includes('lagost')) return 'lagosta';
  if (norm.includes('dino')) return 'dinossauro';
  if (norm.includes('escav')) return 'escavadeira';
  if (norm.includes('aviao') || norm.includes('pregad')) return 'aviao-de-pregador';
  if (norm.includes('trem') || norm.includes('locomot')) return 'trem';
  if (norm.includes('castel')) return 'castelo';
  if (norm.includes('lagart')) return 'lagarta';
  if (norm.includes('telef')) return 'telefone';
  if (norm.includes('viola') || norm.includes('violao') || norm.includes('guitar')) return 'violao';
  return null;
}
