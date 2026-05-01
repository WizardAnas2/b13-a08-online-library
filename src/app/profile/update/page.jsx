"use client";
import { authClient } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { data, error } = await authClient.updateUser({
        name: name,
        image: image,
    });

    if (error) {
        toast.error(error.message);
    } else {
        toast.success("Profile updated successfully!");
        router.push("/profile");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="card w-full max-w-sm shadow-xl bg-base-100 border">
        <form onSubmit={handleUpdate} className="card-body">
          <h2 className="card-title text-2xl mb-4 text-primary">Update Info</h2>
          
          <div className="form-control">
            <label className="label"><span className="label-text">New Name</span></label>
            <input name="name" type="text" placeholder="Enter new name" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">New Photo URL</span></label>
            <input name="image" type="text" placeholder="Paste image link" className="input input-bordered" required />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Information</button>
          </div>
        </form>
      </div>
    </div>
  );
}