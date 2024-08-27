import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center py-5">
        <Link href="/signin" legacyBehavior>
          <a className="btn btn-primary mb-3">Sign In</a>
        </Link>
        <Link href="/signup" legacyBehavior>
          <a className="btn btn-primary">Sign Up</a>
        </Link>
      </div>
    </div>
  );
}
