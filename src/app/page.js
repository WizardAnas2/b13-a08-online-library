"use client";
import Link from "next/link";
import booksData from "../../public/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  const featuredBooks = booksData.slice(0, 4);

  return (
    <div>
      <section className="hero h-[500px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Find Your Next Read</h1>
            <Link href="/all-books" className="btn btn-primary">Browse Now</Link>
          </div>
        </div>
      </section>
      <div className="bg-primary text-secondary-content py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-bold text-4xl">
          New Arrivals :  {booksData[0].title}  | Special discount on memberships!!! | New text books added | Grab your next book &nbsp;
        </div>
      </div>
      <section className="p-12">
        <h2 className="text-5xl font-bold text-center mb-10">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {featuredBooks.map(book => (
            <div key={book.id} className="card bg-base-100 shadow-xl">
              <figure className="h-64"><img src={book.image_url} alt={book.title} className="object-cover w-full h-full" /></figure>
              <div className="card-body">
                <h2 className="card-title text-sm">{book.title}</h2>
                <div className="card-actions justify-end">
                  <Link href={`/books/${book.id}`} className="btn btn-sm btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-base-200 py-12 px-6">
        <div className="stats shadow w-full">
          <div className="stat place-items-center">
            <div className="stat-title text-xl font-bold ">Books Borrowed</div>
            <div className="stat-value text-primary text-5xl">2.7K</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-xl font-bold">Active Users</div>
            <div className="stat-value text-primary text-5xl">1,200</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-xl font-bold">New Authors</div>
            <div className="stat-value text-primary text-5xl">50+</div>
          </div>
        </div>
      </section>
      <section className="py-12 text-center">
        <h2 className="text-5xl font-bold mb-8 text-primary">WHAT READERS SAY</h2>
        <div className="flex flex-wrap justify-center gap-6">
           <div className="badge badge-outline bg-blue-700 border-none p-6 h-auto max-w-xs text-2xl text-white">The best platform for finding tech books quickly! - Alex</div>
           <div className="badge badge-outline p-6 h-auto max-w-xs text-2xl">Love the clean UI and simple borrowing process. - Sarah</div>
        </div>
      </section>
    </div>
  );
}