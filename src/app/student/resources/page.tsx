import { prisma } from "@/lib/prisma";

export default async function ResourcesPage() {
  const resources = await prisma.resource.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Learning Resources
      </h1>

      {resources.length === 0 ? (
        <p>No resources available yet.</p>
      ) : (
        <div className="space-y-4">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="border rounded-lg p-4"
            >
              <h2 className="font-bold text-lg">
                {resource.title}
              </h2>

              <p>{resource.subject}</p>
              <p>{resource.form}</p>

              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
                Download
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}