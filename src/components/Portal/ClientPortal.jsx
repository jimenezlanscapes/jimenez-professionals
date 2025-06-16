
import React from 'react';

export default function ClientPortal() {
  return (
    <div className="bg-[#0e0e2c] min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold mb-6">Client Portal Access</h1>
      <p className="mb-4 text-gray-300">Access your account using a magic link sent to your email.</p>
      <form className="max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 rounded bg-[#1e1e3f] text-white border border-gray-600"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded font-semibold"
        >
          Send Magic Link
        </button>
      </form>
    </div>
  );
}
