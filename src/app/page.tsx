import path from "path";
import Link from 'next/link';
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-200 mx-auto">
      <h1 className="text-6xl my-4 w-full">
        We are building productivity tools for your <span className="text-accent">entry-level</span> job search.
      </h1>
      <nav className="flex gap-4 justify-between">
        <Link className="bg-input hover:bg-input/80 border-e-foreground w-1/3 px-4 py-2 text-xl rounded-lg flex items-center justify-center" href="/tracker">Job Application Tracker</Link>
        <Link className="bg-input hover:bg-input/80 border-e-foreground w-1/3 px-4 py-2 text-xl rounded-lg flex items-center justify-center" href="/resume">Résumé Manager</Link>
        <Link className="bg-input hover:bg-input/80 border-e-foreground w-1/3 px-4 py-2 text-xl rounded-lg flex items-center justify-center" href="https://discord.gg/KR7WUWdgQQ" target="_blank">

          Join Our Discord
        </Link>
      </nav>
      <form className="flex flex-col gap-4 items-center my-6" action="">
        <label className="text-3xl" htmlFor="email">Sign up for early access.</label>
        <input className="px-4 py-2 bg-input hover:bg-input/80 w-1/2 text-xl rounded-lg" id="email" type="email" placeholder="Enter your email" required />
        <Button>Sign Up</Button>
      </form>

    </div>
  );
}
