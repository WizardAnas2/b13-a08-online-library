"use client";
import { authClient } from "@/lib/auth-client"; //

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <p>Loading...</p>;
  
  if (!session) return <p>Please log in to see your ID.</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p><strong>User ID:</strong> {session.user.id}</p> 
      <p><strong>Name:</strong> {session.user.name}</p>
      <p><strong>Email:</strong> {session.user.email}</p>
    </div>
  );
}