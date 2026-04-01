import path from 'path';
import fs from 'fs';
import type { DayReadings } from './types';

const DATA_DIR = path.join(process.cwd(), 'data', 'mcheyne');

/** date param is "MM-DD" (URL slug format) */
export function loadReadings(date: string): DayReadings | null {
  const parts = date.split('-');
  if (parts.length !== 2) return null;
  const [mm, dd] = parts;
  const filename = `mcheyne_structured_${mm}_${dd}.json`;
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8')) as DayReadings;
  } catch {
    return null;
  }
}

export function todaySlug(): string {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${mm}-${dd}`;
}

export function adjacentSlug(date: string, delta: -1 | 1): string {
  const parts = date.split('-').map(Number);
  const [mm, dd] = parts;
  // Use 2024 (leap year) so 02-29 is valid
  const d = new Date(2024, mm - 1, dd);
  d.setDate(d.getDate() + delta);
  const nm = String(d.getMonth() + 1).padStart(2, '0');
  const nd = String(d.getDate()).padStart(2, '0');
  return `${nm}-${nd}`;
}

export function formatDisplayDate(date: string): string {
  const parts = date.split('-').map(Number);
  const [mm, dd] = parts;
  const d = new Date(2024, mm - 1, dd);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
}

/** Returns all 366 date slugs for generateStaticParams */
export function allSlugs(): string[] {
  const files = fs.readdirSync(DATA_DIR);
  return files
    .filter((f) => f.endsWith('.json'))
    .map((f) => {
      const match = f.match(/mcheyne_structured_(\d{2})_(\d{2})\.json/);
      return match ? `${match[1]}-${match[2]}` : null;
    })
    .filter((s): s is string => s !== null);
}
