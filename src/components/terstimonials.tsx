"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Tutor1 from "../../public/tutor1.png"
import Tutor2 from "../../public/tutor2.jpg"
import Tutor3 from "../../public/tutor3.jpg"

const testimonials = [
	{
		id: 1,
		content:
			"O serviço de hotel para pets foi uma experiência incrível! Precisei viajar e fiquei tranquilo sabendo que o Thor estava sendo bem cuidado. Recebi fotos e atualizações diárias, e ele voltou para casa super feliz! Sem dúvida, o melhor petshop da região.",
		author: "Rafael",
		role: "Tutor do Thor (Bulldog Francês)",
		image: Tutor1
	},
	{
		id: 2,
		content:
			"Desde que comecei a levar a Luna para banho e tosa aqui, ela nunca esteve tão feliz! O atendimento é impecável, os profissionais são super cuidadosos e sempre deixam minha peluda linda e cheirosa. Recomendo de olhos fechados!",
		author: "Mariana Souza",
		role: "Tutora da Luna (Golden Retriever)",
		image: Tutor2
	},
	{
		id: 3,
		content:
			"Meus gatos nunca gostaram de sair de casa, mas o atendimento nesse petshop fez toda a diferença. A equipe é muito paciente e cuidadosa, e o serviço de banho especializado para felinos foi maravilhoso! Agora sei onde confiar o cuidado deles.",
		author: "Camila Fernandes",
		role: "Tutora da Mel e do Max",
		image: Tutor3
	}
]

export function Testimonials() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		slidesToScroll: 1
	})

	function scrollPrev() {
		emblaApi?.scrollPrev()
	}

	function scrollNext() {
		emblaApi?.scrollNext()
	}

	return (
		<section className="bg-[#FFD449] py-16">
			<div className="container mx-auto px-4">
				<h2
					data-aos="fade-down"
					className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 mb-12 text-center"
				>
					Depoimentos de nossos clientes
				</h2>

				<div className="relative max-w-4xl mx-auto">
					<div
						className="overflow-hidden relative cursor-grab active:cursor-grabbing"
						ref={emblaRef}
					>
						<div className="flex">
							{testimonials.map((item) => (
								<div key={item.id} className="px-3 flex-[0_0_100%]">
									<article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
										<div className="flex flex-col items-center text-center space-y-4 px-4">
											<div className="relative w-24 h-24">
												<Image
													src={item.image}
													alt={`Foto de ${item.author}.`}
													fill
													sizes="96px"
													className="object-cover rounded-full"
													quality={100}
												/>
											</div>

											<p className="text-gray-200 select-none">
												{item.content}
											</p>

											<div>
												<p className="font-bold select-none">{item.author}</p>
												<p className="text-gray-400 text-sm select-none">
													{item.role}
												</p>
											</div>
										</div>
									</article>
								</div>
							))}
						</div>
					</div>
					<button
						type="button"
						onClick={scrollPrev}
						className="bg-[#FFFFFFaa] border-1 hover:scale-120 duration-300 border-green-500 absolute left-0 -translate-y-1/2 top-1/2 z-10 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full shadow-lg"
					>
						<ChevronLeft className="w-6 h-6 text-gray-600" />
					</button>
					<button
						type="button"
						onClick={scrollNext}
						className="bg-[#FFFFFFaa] border-1 hover:scale-120 duration-300 border-green-500 absolute right-0 -translate-y-1/2 top-1/2 z-10 w-10 h-10 cursor-pointer flex items-center justify-center rounded-full shadow-lg"
					>
						<ChevronRight className="w-6 h-6 text-gray-600" />
					</button>
				</div>
			</div>
		</section>
	)
}
