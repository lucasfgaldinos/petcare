import Image from "next/image"
import CatImage from "../../public/cat-hero.png"
import DogImage from "../../public/hero-dog.webp"
import { WhatsappLink } from "./whatsapp-link"

export function Hero() {
	return (
		<section className="bg-[#E84C3D] text-white relative overflow-hidden">
			<div>
				<Image
					src={DogImage}
					alt="Foto de um cachorro alegre."
					fill
					sizes="100vw"
					priority
					className="object-cover opacity-60 lg:hidden"
				/>
				<div className="absolute inset-0 bg-black opacity-40 lg:hidden" />
			</div>

			<div className="container mx-auto py-16 px-4 md:pb-0 relative ">
				<article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<h1
							data-aos="fade-down"
							data-aos-delay="200"
							className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
						>
							Seu pet merece cuidado, carinho e atenção especial.
						</h1>
						<p data-aos="fade-down" className="lg:text-lg">
							Oferecemos os melhores serviços para garantir o bem-estar e a
							felicidade do seu amigo de quatro patas.
						</p>

						<div>
							<WhatsappLink
								variant="green"
								href="https://wa.me/5516991328759?text=Olá! Vim pelo site e gostaria de mais informações."
							>
								Contato via WhatsApp
							</WhatsappLink>
						</div>

						<div className="mt-8">
							<p data-aos="fade-up" className="text-sm mb-4">
								<b className="bg-black text-white px-2 py-1 rounded-md">5%</b>{" "}
								de desconto na primeira compra.
							</p>

							<div className="flex mt-4">
								<div className="w-32 hidden lg:block">
									<Image
										src={CatImage}
										alt="Foto de um gato."
										quality={100}
										className="object-fill"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="hidden md:block h-full relative">
						<Image
							src={DogImage}
							alt="Foto de cachorro alegre."
							className="object-contain"
							fill
							quality={100}
							priority
						/>
					</div>
				</article>
			</div>
		</section>
	)
}
