import person1 from "@/assets/wesley.jpeg";
import person2 from "@/assets/deni.png";
import objectAnimated from "@/assets/Ellipse 24.svg";
import Image from "next/image";
import GlowEffect from "./glowEffect/glowEffec";
import GlowNoEffect from "./glowEffect/glowNoEffect";

const WhoIam = () => {
    const pessoas = [{
            nome: "Denilson Coutinho",
            cargo: "Densenvolvedor e WebDesigner",
            texto: "Jovem visionário com 4 anos dedicados à inovação digital, Denilson é responsável por traduzir insights em experiências memoráveis. Especializado em UX/UI Design e Progamação.",
            imagem: person2,
            background: "linear-gradient(135deg, #070707 0%, #C80101 100%)",
        },

        {
            nome: "Wesley Vieira",
            cargo: "Creative Director",
            texto: "Com mais de 8 anos de experiência no mercado criativo, Wesley lidera projetos que transformam marcas e conectam pessoas. Especialista em estratégia de marca, ela combina visão criativa com execução estratégica.",
            imagem: person1,
            background: "linear-gradient(135deg, #C80101 0%, #070707 100%)",
        },
        
    ];

    return (
        <section className="md:py-20 bg-bgPrimary overflow-hidden relative">
            <div className="container mx-auto px-2 max-w-6xl">
                <h2 className="text-4xl text-white font-bold mb-24 text-center">
                    Quem está por trás
                </h2>
                {/* <div className="absolute md:right-[500px] right-10 bottom-96 z-2 max-w-[500px] h-[500px] ">
                    <Image src={objectAnimated} alt="objectAnimated" className=" object-cover elementAnimated" />
                </div> */}
                <div className="space-y-20 z-20 relative">
                    {pessoas.map((pessoa, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-2  gap-12 items-center"
                        >
                            <div className={ `${index % 2 === 0 ? 'md:order-2 order-1':'order-2'}'`}>
                                <h3 className="text-3xl font-bold mb-1 text-textPrimary md:text-left text-center">{pessoa.nome}</h3>
                                <p className=" mb-6 text-white md:text-left text-center">{pessoa.cargo}</p>
                                <p className=" leading-relaxed text-white md:text-left text-center md:text-base text-xs">{pessoa.texto}</p>
                            </div>

                            <div className="relative  z-1">
                                <div className="md:max-w-[370px] max-w-[300px] mx-auto">
                                <GlowNoEffect />
                                </div>
                                <Image
                                    src={pessoa.imagem}
                                    alt={pessoa.nome}
                                    width={300}
                                    height={300}
                                    quality={100}
                                    className="w-full object-cover  md:h-[500px] buttonShadow h-[300px] rounded-2xl z-10 relative"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoIam;