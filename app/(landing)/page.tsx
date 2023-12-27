import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Awesome App</h1>
        <p className="text-lg mb-8">Discover a world of possibilities with our amazing features.</p>

        <div className="flex space-x-4">
          <Link href={"/sign-in"}>
            <Button>Sign In</Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
