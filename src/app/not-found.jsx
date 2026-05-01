"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-primary animate-bounce">404</h1>
      
      <div className="mt-4">
        <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The book you are looking for might have been moved, deleted, 
          or perhaps it never existed in our library.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn btn-primary px-8">
          Back to Home
        </Link>
        <Link href="/all-books" className="btn btn-outline px-8">
          Browse All Books
        </Link>
      </div>
      <div className="mt-12 opacity-20">

      </div>
    </div>
  );
}