import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="font-display text-8xl font-bold text-navy-100 mb-4" aria-hidden="true">
          404
        </p>
        <h1 className="font-display text-2xl font-bold text-navy-800 mb-3">
          Page Not Found
        </h1>
        <p className="text-navy-500 font-body text-base mb-8">
          The page you&#39;re looking for doesn&#39;t exist. Let&#39;s get you back on track.
        </p>
        <Link
          href="/"
          className="btn-primary inline-block px-7 py-3.5 rounded-lg font-semibold font-body text-base"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
