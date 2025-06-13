export default function Heading({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <h1 className="text-6xl my-4 w-full">
            {children}
        </h1>
    );
}
