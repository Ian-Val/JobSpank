import type { Metadata } from "next";
import "./globals.css";

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
      <body style={{ margin: "3rem" }}>
        <header>
          <a
            style={{ fontSize: "1.25rem", marginBottom: "2rem" }}
            href="/">jobspank.org</a>
          {/* <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav> */}
        </header>
        <main>
          {children}
        </main>
        <footer>
          <a href="https://buy.stripe.com/28E5kEe9q6Hd1GraaCgQE01">Support JobSpank</a>
          <a href="https://www.linkedin.com/company/106566481">Follow Us On LinkedIn</a>
          <p>&copy; 2025 Jobspank LLC</p>
          <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async></script>
        </footer>
      </body>
    </html >
  );
}
