import { type ReactNode } from "react"

import { Nunito } from "next/font/google"
import "@app/styles/globals.css"

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
})

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
        </html>
    )
}
