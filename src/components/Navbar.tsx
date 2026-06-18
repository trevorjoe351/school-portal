import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 border-b p-4">
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/teacher/upload">Teacher</Link>
      <Link href="/student/resources">Student</Link>
    </nav>
  );
}