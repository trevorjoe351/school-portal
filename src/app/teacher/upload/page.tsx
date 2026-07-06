"use client";

import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [form, setForm] = useState("");
const [description, setDescription] = useState("");
const [file, setFile] = useState<File | null>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          subject,
          form,
          
        }),
      });
      <textarea
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  className="w-full border rounded p-2"
  rows={4}
/>

      if (!response.ok) {
        throw new Error("Failed to upload resource");
      }

      alert("Resource uploaded successfully!");

      setTitle("");
      setSubject("");
      setForm("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while uploading.");
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Upload Resource</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Resource Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
          required
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border rounded p-2"
          required
        />

        <input
          type="text"
          placeholder="Form (e.g. Form 4)"
          value={form}
          onChange={(e) => setForm(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        
        <div>
  <label className="block mb-2 font-medium">
    Resource File
  </label>

  <input
    type="file"
    accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
    className="w-full border rounded p-2"
    required
  />
</div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Upload Resource
        </button>
      </form>
    </main>
  );
}
