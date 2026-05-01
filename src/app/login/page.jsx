"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await authClient.signIn.email({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login Successful!");
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6 gap-2">
            <button className="btn btn-primary">Login</button>
            <Link href="/" className="btn btn-ghost">Back to Home</Link> 
          </div>
        </form>
      </div>
    </div>
  );
}