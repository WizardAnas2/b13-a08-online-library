import Link from "next/link";

const Navbar = () => {
  const user = null; 

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold text-primary">BookFlow</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/all-books">All Books</Link></li>
          {user && <li><Link href="/profile">My Profile</Link></li>}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="font-medium">{user.name}</span>
            <button className="btn btn-outline btn-sm">Logout</button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;