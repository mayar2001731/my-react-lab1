export default function Profile() {
  const username = "Mayar";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      <p className="text-lg">
        <span className="font-semibold">Username:</span> {username}
      </p>
    </div>
  );
}