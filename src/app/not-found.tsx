import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-primary">404</p>

        <h1 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-3 text-base-content/60">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="btn btn-primary"
          >
            <FaHome />
            Go Home
          </Link>

          <Link
            href="/workout"
            className="btn btn-outline"
          >
            <FaSearch />
            Browse Workouts
          </Link>
        </div>
      </div>
    </div>
  );
}