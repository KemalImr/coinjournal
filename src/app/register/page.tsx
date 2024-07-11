// src/app/register/page.tsx
"use client";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Konto erstellen</h1>
      <form className="space-y-4">
        <input
          type="password"
          placeholder="Passwort"
          className="px-4 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Passwort"
          className="px-4 py-2 border rounded"
        />
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
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          Konto erstellen
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
