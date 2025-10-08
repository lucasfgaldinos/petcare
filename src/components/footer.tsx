import {
	FacebookLogoIcon,
	InstagramLogoIcon
} from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import GoldenImg from "../../public/golden.png"
import WhiskasImg from "../../public/natural.png"
import PrimierImg from "../../public/primier.png"
import RoyalImg from "../../public/royal.png"
import NaturalImg from "../../public/whiskas.png"
import { WhatsappLink } from "./whatsapp-link"

const brands = [
	{ id: 1, name: "Royal Canin", logo: RoyalImg },
	{ id: 2, name: "Golden", logo: GoldenImg },
	{ id: 3, name: "Primier", logo: PrimierImg },
	{ id: 4, name: "Formula Natural", logo: NaturalImg },
	{ id: 5, name: "Whiskas", logo: WhiskasImg },
	{ id: 6, name: "Golden", logo: GoldenImg }
]

export function Footer() {
	return (
		<section className="bg-[#E84C3D] py-16 text-white">
			<div className="container mx-auto px-4">
				<div className="border-b border-white/20 pb-8">
					<div>
						<h4
							data-aos="fade-down"
							className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 mb-12 text-center"
						>
							Marcas que trabalhamos
						</h4>

						<div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
							{brands.map((item) => (
								<div
									data-aos="fade-down"
									key={item.id}
									className="bg-white p-4 rounded-lg flex items-center justify-center"
								>
									<Image
										src={item.logo}
										alt={`Logo ${item.name}.`}
										width={100}
										height={50}
										className="object-contain"
										quality={100}
										style={{
											width: "auto",
											height: "auto"
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
					<div>
						<h3 className="text-2xl font-semibold mb-2">PetCare</h3>
						<p className="mb-4">
							Cuidando do seu melhor amigo com amor e dedicação.
						</p>
						<WhatsappLink variant="green">Contato via WhatsApp</WhatsappLink>
					</div>

					<div>
						<h3 className="text-2xl font-semibold mb-2">Contatos</h3>
						<p>
							<b>E-mail:</b> contato@petcareoficial.com.br
						</p>
						<p>
							<b>Telefone:</b> (XX) XXXXX-XXXX
						</p>
						<p>
							<b>Endereço:</b> Rua X, 2270
						</p>
					</div>

					<div>
						<h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
						<div className="flex items-center gap-3">
							<a
								href="https://www.facebook.com.br"
								target="_blank"
								rel="noreferrer"
							>
								<FacebookLogoIcon className="w-10 h-10 hover:scale-120 duration-300" />
							</a>
							<a
								href="https://www.instagram.com.br"
								target="_blank"
								rel="noreferrer"
							>
								<InstagramLogoIcon className="w-10 h-10 hover:scale-120 duration-300" />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</section>
	)
}
