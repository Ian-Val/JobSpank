import Heading from '@/components/ui/Heading';
import Button, { ButtonVariant } from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-180 h-[calc(100vh-24rem)] mx-auto my-24">
      <Heading>
        We are building productivity tools for your <span className="text-accent">entry-level</span> job search.
      </Heading>
      <form className="flex flex-col gap-4 items-start my-6" action="">
        <label className="text-2xl" htmlFor="email">Join our mailing list to recieve updates and exclusive early access.</label>
        <div className="flex gap-4 w-full">
          <input className="px-4 py-2 bg-input hover:bg-input/80 w-full text-xl rounded-lg" id="email" type="email" placeholder="Enter your email" required />
          <Button variant={ButtonVariant.PRIMARY} className="w-40">Sign Up</Button>
        </div>
      </form>

    </div>
  );
}
