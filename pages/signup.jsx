
import Navbar from '../components/Navbar';

export default function Signup() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center bg-green-50 p-10">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Sign Up</h1>
        <p className="text-xl text-green-700">Registration will be available soon. Please check back later!</p>
      </main>
    </>
  );
}
