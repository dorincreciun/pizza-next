"use client"

import React, {
    createContext,
    useContext,
    useId,
    type InputHTMLAttributes,
    type LabelHTMLAttributes,
    type ReactNode,
} from "react"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@shared/utils/cn"

// --- TYPES ---

export type InputStatus = "default" | "error" | "success" | "warning" | "loading" | "disabled"

export interface InputContextValue {
    id: string
    status: InputStatus
}

export interface InputRootProps {
    id?: string
    status?: InputStatus
    children: ReactNode
    className?: string
}

export interface InputControlProps extends VariantProps<typeof inputVariants> {
    children: ReactNode
    className?: string
}

export interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export interface InputSlotProps {
    children: ReactNode
    className?: string
}

export interface InputHelperProps {
    children?: ReactNode
    className?: string
}

// --- STYLES (CVA) ---

const inputVariants = cva(
    [
        "flex items-center w-full overflow-hidden transition-all duration-300 ease-out",
        "rounded-lg border outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]",
    ],
    {
        variants: {
            variant: {
                primary: "bg-[#FAFAFA] border-black/6 focus-within:bg-white",
                secondary: "bg-white border-black/8",
            },
            inputSize: {
                // Pentru text de 14px, ajustăm înălțimile și padding-ul orizontal
                sm: "h-9 px-2.5 text-[13px] gap-2",
                md: "h-11 px-3.5 text-sm gap-2.5",
                lg: "h-[52px] px-4 text-[15px] gap-3",
            },
            status: {
                default: [
                    "focus-within:ring-1 focus-within:ring-[#FE5F00]/30",
                    "focus-within:border-[#FE5F00]/50 focus-within:shadow-[0_0_0_3px_rgba(254,95,0,0.06)]",
                ],
                error: [
                    "border-red-500/30 bg-red-50/20",
                    "focus-within:ring-1 focus-within:ring-red-500/40 focus-within:border-red-500/40",
                    "focus-within:shadow-[0_0_0_3px_rgba(239,68,68,0.08)]",
                ],
                success: [
                    "border-emerald-500/30 bg-emerald-50/20",
                    "focus-within:ring-1 focus-within:ring-emerald-500/40",
                    "focus-within:shadow-[0_0_0_3px_rgba(16,185,129,0.08)]",
                ],
                warning: [
                    "border-amber-500/40 bg-amber-50/20",
                    "focus-within:ring-1 focus-within:ring-amber-500/50",
                    "focus-within:shadow-[0_0_0_3px_rgba(245,158,11,0.08)]",
                ],
                loading: [
                    "border-blue-400/20 bg-blue-50/10 cursor-wait opacity-80",
                    "focus-within:border-blue-400/40",
                ],
                disabled: [
                    "bg-gray-100/60 border-gray-200/50 opacity-70 shadow-none !cursor-not-allowed select-none",
                ],
            },
        },
        defaultVariants: {
            variant: "primary",
            inputSize: "md",
            status: "default",
        },
    },
)

// --- CONTEXT ---

const InputContext = createContext<InputContextValue | undefined>(undefined)

const useInputContext = () => {
    const context = useContext(InputContext)
    if (!context) throw new Error("Input sub-components must be rendered within <Input.Root>")
    return context
}

// --- COMPONENTS ---

/**
 * Componentă Root care gestionează starea și contextul pentru întreg sistemul de Input.
 * @param id - Identificator unic (opțional). Dacă nu este furnizat, se generează automat.
 * @param status - Definește starea vizuală a grupului: `default`, `error`, `success`, `warning`, `loading`, `disabled`.
 * @param children - Elementele componentei (Label, Control, Helper).
 */
export const InputRoot = ({
    id: externalId,
    status = "default",
    children,
    className,
}: InputRootProps) => {
    const generatedId = useId()
    const id = externalId || generatedId

    return (
        <InputContext.Provider value={{ id, status }}>
            <div className={cn("group/field flex w-full flex-col", className)}>{children}</div>
        </InputContext.Provider>
    )
}

/**
 * Componentă Label care moștenește ID-ul și stilul de stare din Root.
 * @param className - Clase CSS adiționale pentru personalizarea etichetei.
 */
export const InputLabel = ({ className, ...props }: InputLabelProps) => {
    const { id, status } = useInputContext()
    const labelStyles = {
        default: "text-gray-700",
        error: "text-red-600",
        success: "text-emerald-700",
        warning: "text-amber-700",
        loading: "text-blue-600",
        disabled: "text-gray-400 cursor-not-allowed",
    }
    return (
        <label
            htmlFor={id}
            className={cn(
                "mb-1.5 ml-1 block text-sm font-medium transition-colors duration-300",
                labelStyles[status],
                className,
            )}
            {...props}
        />
    )
}

/**
 * Container vizual pentru InputField și InputSlot, aplicând variantele de design.
 * @param variant - Tema vizuală: `primary` sau `secondary`.
 * @param inputSize - Dimensiunea verticală: `sm`, `md`, `lg`.
 */
export const InputControl = ({ children, variant, inputSize, className }: InputControlProps) => {
    const { status } = useInputContext()
    return (
        <div className={cn(inputVariants({ variant, inputSize, status }), className)}>
            {children}
        </div>
    )
}

/**
 * Element decorativ (iconiță sau text) plasat în interiorul Control-ului.
 */
export const InputSlot = ({ children, className }: InputSlotProps) => (
    <div
        className={cn(
            "flex shrink-0 items-center justify-center text-gray-400 select-none",
            className,
        )}
    >
        {children}
    </div>
)

/**
 * Câmpul de input nativ, optimizat pentru a moșteni stările de context.
 */
export const InputField = ({ className, ...props }: InputFieldProps) => {
    const { id, status } = useInputContext()
    const isDisabled = status === "disabled" || status === "loading"

    return (
        <input
            id={id}
            disabled={isDisabled}
            className={cn(
                "h-full w-full border-none bg-transparent px-0 outline-none focus:ring-0",
                "font-light tracking-tight text-gray-700 placeholder:text-gray-300",
                isDisabled && "pointer-events-none cursor-not-allowed",
                className,
            )}
            {...props}
        />
    )
}

/**
 * Componentă pentru afișarea mesajelor de ajutor sau eroare sub input.
 */
export const InputHelper = ({ children, className }: InputHelperProps) => {
    const { id, status } = useInputContext()
    if (!children) return null

    const helperStyles = {
        default: "text-gray-400",
        error: "text-red-500 font-medium",
        success: "text-emerald-600 font-medium",
        warning: "text-amber-600 font-medium",
        loading: "text-blue-500",
        disabled: "text-gray-300",
    }

    return (
        <p
            id={`${id}-helper`}
            role={status === "error" ? "alert" : "status"}
            className={cn(
                "animate-in fade-in slide-in-from-top-1 mt-1.5 ml-1 text-[11px] transition-all duration-300",
                helperStyles[status],
                className,
            )}
        >
            {children}
        </p>
    )
}
