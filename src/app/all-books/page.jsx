"use client";
import { useState } from "react";
import booksData from "../../../public/data.json";
import BookCard from "@/components/BookCard"; 
import Sidebar from "@/components/Sidebar";  
import Link from "next/link"; // Import Link

export default function AllBooks() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = booksData.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || book.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto flex flex-col md:flex-row min-h-screen p-6 gap-8">
      
      <Sidebar setCategory={setCategory} activeCategory={category} />

      <div className="flex-1">
        {/* Added Return to Home Button */}
        <div className="mb-6 ">
           <Link href="/" className="btn btn-primary btn-lg ">
             Return to the home page
           </Link>
        </div>

        <div className="form-control mb-8">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Search by title..." 
              className="input input-bordered w-full focus:outline-primary text-xl py-7 pl-9"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-4xl font-semibold text-gray-600">No books found in this category. Please try another one.</h2>
          </div>
        )}
      </div>
    </div>
  );
}