"use client";
import { useParams } from "next/navigation";
import booksData from "../../../../public/data.json";
import toast from "react-hot-toast";

export default function BookDetails() {
  const { id } = useParams();
  const book = booksData.find((b) => b.id === parseInt(id));

  const handleBorrow = () => {
    
    toast.success(`Successfully borrowed "${book.title}"!`);
  };

  if (!book) return <div className="p-20 text-center text-2xl">Book not found!</div>;

  return (
    <div className="container mx-auto p-6 md:p-20">
      <div className="flex flex-col md:flex-row gap-10 bg-base-100 shadow-2xl rounded-2xl overflow-hidden border">
        
        <div className="md:w-1/2">
          <img 
            src={book.image_url} 
            alt={book.title} 
            className="w-full h-full object-cover max-h-[600px]" 
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-primary font-semibold mb-4">by {book.author}</p>
          <div className="divider"></div>
          <p className="text-gray-700 leading-relaxed mb-6">{book.description}</p>
          
          <div className="bg-base-200 p-4 rounded-lg mb-6">
            <span className="font-bold">Availability:</span> 
            <span className="ml-2 text-success font-mono">{book.available_quantity} copies left</span>
          </div>
          <button onClick={handleBorrow} className="btn btn-primary btn-lg w-full">
            Borrow This Book
          </button>
        </div>
      </div>
    </div>
  );
}
