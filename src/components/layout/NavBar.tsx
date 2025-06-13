import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between">
            <Link className="text-xl" href="/">jobspank.org</Link>
            <nav className="flex gap-8 justify-between">
                <Link
                    className="text-xl"
                    href="/tracker"
                >
                    Job Application Tracker
                </Link>
                <Link
                    className="text-xl"
                    href="/resume"
                >
                    Resume Manager
                </Link>
                <a
                    className="text-xl"
                    href="https://discord.gg/KR7WUWdgQQ"
                    target="_blank"
                >
                    Join Our Discord
                </a>
            </nav>
        </header>
    );
}
