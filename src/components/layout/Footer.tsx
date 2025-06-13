import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="absolute left-0 bottom-0 w-full flex justify-between p-4">
            <p>&copy; 2025 Jobspank LLC</p>
            <div className="flex gap-4">
                <a
                    className="underline"
                    href="https://buy.stripe.com/28E5kEe9q6Hd1GraaCgQE01"
                    target="_blank"
                >
                    Fund JobSpank
                </a>
                <a
                    className="underline"
                    href="https://www.linkedin.com/company/106566481"
                    target="_blank"
                >
                    LinkedIn
                </a>
            </div>

        </footer>
    );
}
