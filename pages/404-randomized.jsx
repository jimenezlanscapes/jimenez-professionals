
import Link from 'next/link';

const messages = [
  "This patch of internet needs more fertilizer.",
  "You've reached the part of the yard where even Turfie won’t go.",
  "Page not found. But we did find a half-buried gnome."
];

const randomMessage = messages[Math.floor(Math.random() * messages.length)];

export default function Custom404() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-green-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-green-700 mb-2">Uh-oh... You wandered off the lawn! 🌱</h2>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        {randomMessage}
      </p>
      <img
        src="/assets/lost-gardener.png"
        alt="Lost Gardener"
        className="w-64 h-auto mb-6"
      />
      <Link href="/">
        <a className="inline-block bg-green-700 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-green-800 transition">
          Back to Safety (aka Home)
        </a>
      </Link>
    </div>
  );
}
