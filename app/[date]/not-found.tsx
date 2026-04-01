import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 text-center">
      <h1 className="font-sans text-2xl font-light text-gray-300 mb-6">
        Reading not found
      </h1>
      <p className="font-sans text-sm text-gray-500 mb-8">
        That date doesn&rsquo;t have a reading in the M&rsquo;Cheyne plan.
      </p>
      <Link
        href="/"
        className="font-sans text-sm text-amber-400 hover:text-amber-300 transition-colors"
      >
        &larr; Go to today&rsquo;s reading
      </Link>
    </div>
  );
}
