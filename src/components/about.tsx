import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { Check, MapPin } from "lucide-react"
import Image from "next/image"
import About1Img from "../../public/about-1.png"
import About2Img from "../../public/about-2.png"
import { WhatsappLink } from "./whatsapp-link"

export function About() {
	return (
		<section className="bg-[#FDF6EC] py-16">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
							<Image
								src={About1Img}
								alt="Foto de um cachorro e um gato."
								fill
								quality={100}
								className="object-cover hover:scale-110 duration-300"
								priority
							/>
						</div>

						<div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
							<Image
								src={About2Img}
								alt="Foto de um cachorro e um gato."
								fill
								quality={100}
								priority
							/>
						</div>
					</div>

					<div className="space-y-6 mt-10">
						<h2
							data-aos="fade-down"
							data-aos-delay="200"
							className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
						>
							Sobre
						</h2>
						<p data-aos="fade-down">
							Até que alguém ame um animal, uma parte da sua alma permanece
							adormecida. Acreditamos nisso e acreditamos no fácil acesso a
							coisas que fazem bem à mente, ao corpo e ao espírito. Com uma
							oferta inteligente, um suporte excelente e um checkout seguro,
							você está em boas mãos.
						</p>

						<ul data-aos="fade-right" className="space-y-4">
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Aberto desde 2006.
							</li>
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Equipe com mais de 10 veterinários.
							</li>
							<li className="flex items-center gap-2">
								<Check className="text-red-500" />
								Qualidade é nossa prioridade.
							</li>
						</ul>

						<div className="flex gap-4">
							<WhatsappLink variant="red">Contato via WhatsApp</WhatsappLink>

							<WhatsappLink variant="transparent-black">
								Nosso endereço
							</WhatsappLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
