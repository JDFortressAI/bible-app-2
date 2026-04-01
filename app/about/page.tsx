import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About \u2014 JD Fortress Bible',
};

const sections = [
  {
    heading: 'Why another Bible app?',
    body: 'Hundreds of Bible apps exist\u2014yet how many of us actually read the Bible regularly? We open one, freeze on what to read, then slip back into doom-scrolling. We built this for ourselves first: open it, and today\u2019s readings appear instantly\u2014clean, no logging in, no cookies, no fuss. And it works. Evening \uD835\uDD4F is gone; five-minute M\u2019Cheyne hits now bookend my day in God\u2019s Word, even shaping my dreams. I still read my trusty physical Bible, but this app lets me revisit passages and meditate on God\u2019s Word all day. Our prayer: may it spark a love for God\u2019s Word\u2014to read and hear Him every day.',
  },
  {
    heading: 'Why We Need to Read the Bible',
    body: 'Like the sons of Issachar who understood the times and knew what they ought to do (1 Chronicles 12:32), we need God\u2019s Word to cut through today\u2019s chaos. Skip the endless scroll; redeem those precious five minutes throughout the day to hear God\u2019s voice. Daily reading sharpens your discernment, renews your mind, and aligns you with His perfect will, equipping you thoroughly for every good work.',
  },
  {
    heading: 'Why the NKJV?',
    body: 'The New King James Version (NKJV), rooted in the Textus Receptus manuscript, ensures you\u2019re engaging with a translation that honours the inspiration and preservation of God\u2019s Word. Its poetic cadence and precision make it a powerful choice for hearing God speak clearly, without distraction.',
  },
  {
    heading: "Why M\u2019Cheyne?",
    body: 'How many times have you started a \u201cwhole Bible\u201d plan and bailed halfway? Robert Murray M\u2019Cheyne\u2019s plan changes that: four passages a day take you through the Old Testament once, and the New Testament and Psalms twice, every year. Those four readings weave together beautifully, revealing connections across Scripture that you\u2019ll only discover by sticking with it. This plan isn\u2019t just a schedule\u2014you\u2019ll experience God\u2019s Word in its fullness.',
  },
  {
    heading: 'We Welcome Your Feedback',
    body: null, // rendered separately with mailto link
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">

      {/* ── top nav ── */}
      <header className="flex items-center justify-between mb-14">
        <Link
          href="/"
          className="font-sans text-sm text-gray-400 hover:text-amber-400 transition-colors"
        >
          &larr; Back to readings
        </Link>
        <span className="font-sans text-sm text-gray-500 tracking-wide">
          JD Fortress Bible
        </span>
      </header>

      <h1 className="font-sans font-light text-3xl text-gray-200 mb-14 tracking-wide">
        &#x1F4D6; About Our Bible Web&#x2011;App
      </h1>

      {sections.slice(0, 4).map((s) => (
        <div key={s.heading} className="mb-12">
          <h2 className="font-sans text-base font-semibold text-amber-400 mb-4 tracking-wide">
            {s.heading}
          </h2>
          <p className="about-text">{s.body}</p>
        </div>
      ))}

      {/* Feedback section — has a mailto link */}
      <div className="mb-12">
        <h2 className="font-sans text-base font-semibold text-amber-400 mb-4 tracking-wide">
          We Welcome Your Feedback
        </h2>
        <p className="about-text">
          We built this to serve the Church, helping believers return to God&rsquo;s
          Word in these end-of-the-end times. The app is simple, beautiful, and
          distraction-free, so you can focus on what matters: hearing from God.{' '}
          <a
            href="mailto:contact@jdfortress.com"
            className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
          >
            Tell us what works, what doesn&rsquo;t
          </a>
          \u2014your input shapes the next version. Let&rsquo;s keep sharpening
          this tool so more of us hear clearly from God.
        </p>
      </div>

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
