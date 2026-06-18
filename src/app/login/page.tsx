export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <form className="w-96 rounded-lg border p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="mb-3 w-full rounded border p-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-3 w-full rounded border p-2"
        />

        <button
          className="w-full rounded bg-black p-2 text-white"
        >
          Login
        </button>
      </form>
    </main>
  );
}
