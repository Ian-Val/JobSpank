export default function Header({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="
            text-6xl 
            my-8 
            w-full
            font-thin
        ">
            {children}
        </h1>
    );
}