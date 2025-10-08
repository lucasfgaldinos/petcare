"use client"
import useEmblaCarousel from "embla-carousel-react"
import {
	CarTaxiFront,
	ChevronLeft,
	ChevronRight,
	Clock,
	Hotel,
	Scissors,
	Syringe
} from "lucide-react"
import { WhatsappLink } from "./whatsapp-link"

const services = [
	{
		id: 1,
		title: "Banho e Tosa",
		description:
			"Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
		duration: "1h",
		price: "$50",
		icon: <Scissors />,
		linkText:
			"Olá, vi no site sobre Banho e tosa e gostaria de mais informações."
	},
	{
		id: 2,
		title: "Consulta Veterinária",
		description:
			"Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
		duration: "1h",
		price: "$45",
		icon: <Syringe />,
		linkText:
			"Olá, vi no site sobre Consulta veterinária e gostaria de mais informações."
	},
	{
		id: 3,
		title: "Táxi Pet",
		description:
			"Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
		duration: "2h",
		price: "$80",
		icon: <CarTaxiFront />,
		linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações."
	},
	{
		id: 4,
		title: "Hotel para pets",
		description:
			"Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
		duration: "1h",
		price: "$60",
		icon: <Hotel />,
		linkText:
			"Olá, vi no site sobre Hotel para pets e gostaria de mais informações."
	}
]

export function Services() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: false,
		align: "start",
		slidesToScroll: 1
	})

	function scrollPrev() {
		emblaApi?.scrollPrev()
	}

	function scrollNext() {
		emblaApi?.scrollNext()
	}

	return (
		<section className="bg-white py-16">
			<div className="container mx-auto px-4">
				<h2
					data-aos="fade-down"
					className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 mb-12"
				>
					Serviços
				</h2>

				<div className="relative">
					<div
						className="overflow-hidden relative cursor-grab active:cursor-grabbing"
						ref={emblaRef}
					>
						<div className="flex">
							{services.map((item) => (
								<div
									key={item.id}
									className="px-3 flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(100%/3)]"
								>
									<article className="bg-[#1E293B] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
										<div className="flex-1 flex items-start justify-between">
											<div className="flex gap-3">
												<span className="text-3xl">{item.icon}</span>
												<div>
													<h3 className="font-bold text-xl my-1 select-none">
														{item.title}
													</h3>
													<p className="text-gray-100 text-sm select-none">
														{item.description}
													</p>
												</div>
											</div>
										</div>

										<div className="border-t border-gray-700 pt-4 flex items-center justify-between">
											<div className="flex items-center gap-2 text-sm">
												<Clock className="w-4 h-4" />
												<span className="select-none">{item.duration}</span>
											</div>

											<WhatsappLink variant="transparent-green">
												Marcar horário
											</WhatsappLink>
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
