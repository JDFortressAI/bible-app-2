import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  loadReadings,
  adjacentSlug,
  formatDisplayDate,
  allSlugs,
} from '@/lib/mcheyne';
import type { BiblePassage, BibleVerse } from '@/lib/types';

export async function generateStaticParams() {
  return allSlugs().map((date) => ({ date }));
}

// Ensure only the 366 pre-generated slugs are valid
export const dynamicParams = false;

// ── helpers ──────────────────────────────────────────────────────────────────

function groupByChapter(verses: BibleVerse[]): Map<number, BibleVerse[]> {
  const map = new Map<number, BibleVerse[]>();
  for (const v of verses) {
    if (!map.has(v.chapter)) map.set(v.chapter, []);
    map.get(v.chapter)!.push(v);
  }
  return map;
}

// ── components ────────────────────────────────────────────────────────────────

function PassageBlock({ passage }: { passage: BiblePassage }) {
  const chapters = groupByChapter(passage.verses);
  const multiChapter = chapters.size > 1;

  return (
    <div className="mb-14">
      <h3 className="font-sans text-xs uppercase tracking-widest text-amber-400 mb-6 opacity-90">
        {passage.reference}&nbsp;&middot;&nbsp;{passage.version}
      </h3>

      {Array.from(chapters.entries()).map(([ch, verses]) => (
        <div key={ch} className="mb-8">
          {multiChapter && (
            <div className="font-sans text-xs uppercase tracking-widest text-gray-600 mb-4 border-t border-gray-800 pt-4">
              Chapter {ch}
            </div>
          )}
          <p className="verse-text">
            {verses.map((v) => (
              <span key={v.verse}>
                <sup className="verse-number">{v.verse}</sup>
                {v.text}{' '}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

function SectionBlock({
  title,
  passages,
}: {
  title: string;
  passages: BiblePassage[];
}) {
  return (
    <section className="mb-16">
      <h2 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-10 border-b border-gray-800 pb-3">
        {title} Readings
      </h2>
      {passages.map((p, i) => (
        <PassageBlock key={i} passage={p} />
      ))}
    </section>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

export default function ReadingPage({
  params,
}: {
  params: { date: string };
}) {
  const readings = loadReadings(params.date);
  if (!readings) notFound();

  const prev = adjacentSlug(params.date, -1);
  const next = adjacentSlug(params.date, 1);

  return (
    <div className="max-w-3xl mx-auto px-5 py-10">

      {/* ── top nav ── */}
      <header className="flex items-center justify-between mb-14">
        <span className="font-sans text-sm text-gray-400 tracking-wide">
          JD Fortress Bible
        </span>
        <Link
          href="/about"
          className="font-sans text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          About
        </Link>
      </header>

      {/* ── date nav ── */}
      <nav className="flex items-center justify-between mb-12">
        <Link
          href={`/${prev}`}
          className="font-sans text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          &larr; {formatDisplayDate(prev)}
        </Link>
        <h1 className="font-sans font-light text-2xl text-gray-200 tracking-wide">
          {formatDisplayDate(params.date)}
        </h1>
        <Link
          href={`/${next}`}
          className="font-sans text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          {formatDisplayDate(next)} &rarr;
        </Link>
      </nav>

      {/* ── readings ── */}
      <SectionBlock title="Family" passages={readings.Family} />
      <SectionBlock title="Personal" passages={readings.Secret} />

      {/* ── footer ── */}
      <footer className="border-t border-gray-800 pt-8 mt-4 text-center">
        <p className="font-sans text-xs text-gray-600">
          Crafted with love by{' '}
          <a
            href="https://jdfortress.com"
            className="hover:text-gray-400 transition-colors"
          >
            JD Fortress AI Ltd
          </a>
          . Copyright &copy; 2025. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
