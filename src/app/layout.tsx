import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { AosInit } from "@/components/aos-init"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "PetCare",
	description: "PetCare - PetShop e cuidados em geral para o seu pet."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="icon" href="/favicon.svg" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<AosInit />
				<div className="w-full py-1">
					<p className="text-[12px] text-center">
						Desenvolvido por <b>Lucas Galdino</b> | © Todos os direitos
						reservados - 2025
					</p>
				</div>
			</body>
		</html>
	)
}
