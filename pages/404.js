
const jokes = [
  "This patch of internet needs more fertilizer.",
  "You've reached the part of the yard where even Turfie won’t go.",
  "Page not found. But we did find a half-buried gnome."
];
const pick = jokes[Math.floor(Math.random() * jokes.length)];
export default function Custom404() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>404 - Turfie Lost</h1>
      <p>{pick}</p>
      <a href="/">Go Home</a>
    </main>
  );
}
