import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md flex justify-center">
        <SignIn />
      </div>
    </div>
  );
}
