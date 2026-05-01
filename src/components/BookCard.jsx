import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition-shadow">
      <figure className="h-60 overflow-hidden">
        <img 
          src={book.image_url} 
          alt={book.title} 
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <div className="badge badge-secondary mb-2">{book.category}</div>
        <h2 className="card-title text-lg leading-tight mb-2">{book.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{book.description}</p>
        <div className="card-actions justify-end mt-4">
          <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;