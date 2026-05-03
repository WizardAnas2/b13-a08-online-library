"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const router = useRouter();
  
 
  const { data: session } = authClient.useSession();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const newName = e.target.name.value;
    const newImage = e.target.image.value;

    const { data, error } = await authClient.updateUser({
      name: newName,
      image: newImage,
    });

    if (error) {
      toast.error(error.message || "Update failed");
    } else {
      toast.success("Profile updated!");
      router.refresh(); 
      router.push("/"); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <form onSubmit={handleUpdate} className="card-body">
          <h2 className="card-title text-2xl font-bold text-primary">Update Profile</h2>
          
          <div className="form-control">
            <label className="label"><span className="label-text">Display Name</span></label>
            <input name="name" type="text" defaultValue={session?.user?.name} className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label"><span className="label-text">Profile Picture URL</span></label>
            <input name="image" type="text" defaultValue={session?.user?.image} className="input input-bordered" required />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}