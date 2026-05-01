"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const router = useRouter();

  const handleUpdate = (e) => {
    e.preventDefault();
    toast.success("Profile Updated!");
    router.push("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <form onSubmit={handleUpdate} className="card-body">
          <h2 className="card-title text-2xl mb-4">Update Profile</h2>
          
          <div className="form-control">
            <label className="label"><span className="label-text">New Name</span></label>
            <input type="text" placeholder="Enter new name" className="input input-bordered" />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">New Photo URL</span></label>
            <input type="text" placeholder="Paste image link" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Information</button>
          </div>
        </form>
      </div>
    </div>
  );
}