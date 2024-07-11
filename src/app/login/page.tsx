// src/app/login/page.tsx
"use client";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Anmelden</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Passwort"
          className="px-4 py-2 border rounded"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Anmelden
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
