"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = authClient.useSession();

  return (
    <nav className="navbar bg-base-100 shadow-md px-10">
      <div className="flex-1">
        <Link href="/" className="text-3xl font-bold text-primary">
          Online Library
        </Link>
      </div>
      <div className="flex-none gap-4 flex items-center">
        {!session && (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-primary text-white btn-sm md:btn-md">
              Login
            </Link>
            <Link href="/register" className="btn btn-outline btn-sm md:btn-md">
              Register
            </Link>
          </div>
        )}
        {session && (
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block font-medium text-sm">
              {session.user.name}
            </span>
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost btn-circle avatar border border-primary"
              >
                <div className="w-10 rounded-full">
                  <img 
                    src={session.user.image || "https://avatar.iran.liara.run/public"} 
                    alt="User Profile" 
                  />
                </div>
              </div>
              <ul 
                tabIndex={0} 
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="sm:hidden border-b mb-1 pb-1">
                  <span className="font-bold text-primary">
                    {session.user.name}
                  </span>
                </li>
                <li>
                  <Link href="/profile/update">Update Profile</Link>
                </li>
                <li>
                  <button 
                    onClick={async () => {
                      await authClient.signOut();
                      window.location.reload(); 
                    }}
                    className="text-error"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}