"use client";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for BetterAuth goes here
    toast.success("Login Successful!");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6 gap-2">
            <button className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-outline">Login with Google</button>
          </div>
          <p className="mt-4 text-center">New here? <Link href="/register" className="text-primary font-bold">Register</Link></p>
        </form>
      </div>
    </div>
  );
}