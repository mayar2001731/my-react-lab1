import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex gap-6">
      <Link to="/" className="hover:underline">
        Home
      </Link>

      <Link to="/tasks" className="hover:underline">
        Tasks
      </Link>

      <Link to="/profile" className="hover:underline">
        Profile
      </Link>
    </nav>
  );
}