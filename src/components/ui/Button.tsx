export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="hover:cursor-pointer px-4 py-2 mt-1 w-1/4 text-xl rounded-lg bg-accent text-background hover:bg-accent/80 mx-auto" type="submit">{children}</button>
    );
}