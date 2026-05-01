"use client";
import { useState } from "react";
import booksData from "../../../public/data.json";
import BookCard from "@/components/BookCard"; 
import Sidebar from "@/components/Sidebar";  

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
        <div className="form-control mb-8">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Search by title..." 
              className="input input-bordered w-full focus:outline-primary"
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
            <h2 className="text-2xl font-semibold text-gray-400">No books found in this category.</h2>
          </div>
        )}
      </div>
    </div>
  );
}