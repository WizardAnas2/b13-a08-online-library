"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const { data, error } = await authClient.signUp.email({
      email: form.email.value,
      password: form.password.value,
      name: form.name.value,
      image: form.photo.value, 
      callbackURL: "/login",
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Registration Successful!");
      router.push("/login");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 my-10">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-3xl font-bold text-center">Create Account</h1>
          
          <div className="form-control">
            <label className="label"><span className="label-text">Full Name</span></label>
            <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Email</span></label>
            <input name="email" type="email" placeholder="email@example.com" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Photo URL</span></label>
            <input name="photo" type="text" placeholder="Image link" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input name="password" type="password" placeholder="........" className="input input-bordered" required />
          </div>

          <div className="form-control mt-6 gap-3">
            <button className="btn btn-primary">Register</button>
            <div className="divider">OR</div>
            
            <Link href="/" className="btn btn-outline border-gray-300">
              Go Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}