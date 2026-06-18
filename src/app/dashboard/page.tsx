export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        School Portal Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="border p-4 rounded">
          Teachers
        </div>

        <div className="border p-4 rounded">
          Students
        </div>

        <div className="border p-4 rounded">
          Resources
        </div>
      </div>
    </main>
  );
}