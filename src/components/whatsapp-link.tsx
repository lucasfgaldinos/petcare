import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { clsx } from "clsx"
import { MapPin } from "lucide-react"
import type { ReactNode } from "react"

type WhatsappLinkProps = {
	children: ReactNode
	href: string
	variant: "green" | "transparent-green" | "transparent-black" | "red"
}

export function WhatsappLink({ children, href, variant }: WhatsappLinkProps) {
	return (
		<div data-aos="zoom-in" className="inline-block">
			<a
				className={clsx(
					"hover:scale-110 text-black duration-300 w-fit border-2 px-5 py-[6px] rounded-md font-semibold flex items-center justify-center gap-2",
					{
						"bg-green-500 border-green-500": variant === "green",
						"bg-[#E84C3D] border-[#E84C3D]": variant === "red",
						"bg-transparent border-black": variant === "transparent-black",
						"text-white": variant !== "transparent-black",
						"border-green-500": variant === "transparent-green"
					}
				)}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
			>
				{variant === "transparent-black" ? (
					<MapPin className="w-5 h-5" />
				) : (
					<WhatsappLogoIcon className="w-5 h-5" />
				)}
				{children}
			</a>
		</div>
	)
}
