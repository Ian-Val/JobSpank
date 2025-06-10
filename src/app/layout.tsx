import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "JobSpank",
  description: "Job Application Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link className="text-2xl" href="/">jobspank.org</Link>
        </header>
        <main>
          {children}
        </main>
        <footer className="flex justify-between">
          <p>&copy; 2025 Jobspank LLC</p>
          <div className="flex gap-4">
            <a className="underline" href="https://buy.stripe.com/28E5kEe9q6Hd1GraaCgQE01">Fund JobSpank</a>
            <a className="underline" href="https://www.linkedin.com/company/106566481">LinkedIn</a>
          </div>

          <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async></script>
        </footer>
      </body>
    </html >
  );
}
