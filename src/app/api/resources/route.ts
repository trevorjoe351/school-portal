import { prisma } from "@/lib/prisma";

export async function GET() {
  const resources = await prisma.resource.findMany();

  return Response.json(resources);
}

export async function POST(request: Request) {
  const body = await request.json();

  const resource = await prisma.resource.create({
    data: {
      title: body.title,
      subject: body.subject,
      form: body.form,
    },
  });

  return Response.json(resource);
}