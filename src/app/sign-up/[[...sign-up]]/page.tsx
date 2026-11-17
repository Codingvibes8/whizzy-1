import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { clerkEnabled } from "@/lib/clerk";

export default function SignUpPage() {
  if (!clerkEnabled) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f4] py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md text-center">
          <h1 className="font-serif text-2xl font-bold text-[#14161c]">
            Sign up isn&apos;t available yet
          </h1>
          <p className="mt-3 text-sm text-[#4b4f59]">
            Accounts are not switched on for this site. Everything on the public
            site still works without an account.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm bg-[#e8572a] text-white hover:bg-[#d2481e] transition"
          >
            Back to the site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md flex justify-center">
        <SignUp />
      </div>
    </div>
  );
}
