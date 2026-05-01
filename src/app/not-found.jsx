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
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100" 
          height="100" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
      </div>
    </div>
  );
}