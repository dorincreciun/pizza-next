import { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@shared/utils/cn"

const cardVariants = cva(
    "overflow-hidden rounded-2xl border bg-white transition-colors",
    {
        variants: {
            tone: {
                default: "border-gray-100 shadow-sm",
                soft: "border-gray-100 bg-gray-50/45",
                dashed: "border-dashed border-gray-200 shadow-none",
            },
            spacing: {
                none: "",
                sm: "p-4",
                md: "p-5",
                lg: "p-6",
            },
        },
        defaultVariants: {
            tone: "default",
            spacing: "none",
        },
    },
)

interface CardProps extends VariantProps<typeof cardVariants> {
    children: ReactNode
    className?: string
}

interface CardBlockProps {
    children: ReactNode
    className?: string
}

export const Card = ({ children, className, tone, spacing }: CardProps) => {
    return (
        <div className={cn(cardVariants({ tone, spacing }), className)}>
            {children}
        </div>
    )
}

export const CardHeader = ({ children, className }: CardBlockProps) => {
    return <div className={cn("border-b border-gray-100 px-6 py-5", className)}>{children}</div>
}

export const CardTitle = ({ children, className }: CardBlockProps) => {
    return <h2 className={cn("text-base font-semibold tracking-tight text-gray-900", className)}>{children}</h2>
}

export const CardDescription = ({ children, className }: CardBlockProps) => {
    return <p className={cn("mt-1 text-sm text-gray-500", className)}>{children}</p>
}

export const CardContent = ({ children, className }: CardBlockProps) => {
    return <div className={cn("p-6", className)}>{children}</div>
}
