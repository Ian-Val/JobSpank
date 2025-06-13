import { cn } from "@/utils/cn";

export enum ButtonVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    variant?: ButtonVariant
    className?: string
}

export default function Button({
    children,
    onClick,
    type = "button",
    variant = ButtonVariant.PRIMARY,
    className = "",
}: ButtonProps) {
    const variants = {
        [ButtonVariant.PRIMARY]: "bg-accent text-background hover:bg-accent/80",
        [ButtonVariant.SECONDARY]: "bg-input text-background hover:bg-input/80",
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                "px-4 py-2 rounded-md text-xl transition-colors",
                variants[variant],
                className
            )}
        >
            {children}
        </button>
    )
}