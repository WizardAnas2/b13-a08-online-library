"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Implementation logic for BetterAuth would go here
    console.log({ name, email, photo, password });

    // On Success:
    toast.success("Registration Successful! Please login.");
    router.push("/login");
  };

  const handleGoogleLogin = () => {
    // BetterAuth Social Login Logic
    toast.success("Redirecting to Google...");
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
            <input name="photo" type="text" placeholder="https://link-to-your-photo.com" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Password</span></label>
            <input name="password" type="password" placeholder="••••••••" className="input input-bordered" required />
          </div>

          <div className="form-control mt-6 gap-3">
            <button className="btn btn-primary">Register</button>
            <div className="divider">OR</div>
            <button 
              type="button" 
              onClick={handleGoogleLogin} 
              className="btn btn-outline flex items-center gap-2"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5" alt="Google" />
              Register with Google
            </button>
          </div>

          <p className="mt-4 text-center">
            Already have an account? <Link href="/login" className="text-primary font-bold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}