import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Clock, CreditCard, Shield, Users, Zap, Phone } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      id: 'result',
      icon: <Users className="w-5 h-5" />,
      question: 'Não sei se um site vai realmente trazer resultados para o meu negócio.',
      answer: ' Um site profissional aumenta sua visibilidade online, atrai mais clientes e fortalece sua marca. Nossos projetos são otimizados para SEO e conversão, garantindo resultados mensuráveis.'
    },
    {
      id: 'afraid',
      icon: <Clock className="w-5 h-5" />,
      question: 'Tenho medo de investir e não ter retorno.',
      answer: 'Entendemos! Por isso, oferecemos estratégias comprovadas e acompanhamento pós-lançamento para maximizar seu ROI. Seu site será uma ferramenta de vendas, não apenas uma vitrine.'
    },
    {
      id: 'expensive',
      icon: <Shield className="w-5 h-5" />,
      question: 'Acho que criar um site é muito caro.',
      answer: 'Oferecemos até 3 rodadas de revisão gratuitas para garantir que fique exatamente como você imaginou. Se ainda assim não ficar satisfeito, devolvemos 100% do valor investido.'
    },
    {
      id: 'manutencao',
      icon: <CreditCard className="w-5 h-5" />,
      question: 'Não entendo nada de tecnologia, será que vou conseguir gerenciar o site?',
      answer: 'Nossos sites são intuitivos e fáceis de atualizar, mesmo sem conhecimento técnico. Além disso, oferecemos suporte contínuo para te ajudar em cada etapa.'
    },
    {
      id: 'problem',
      icon: <Zap className="w-5 h-5" />,
      question: 'E se o site não funcionar ou tiver problemas?',
      answer: 'Garantimos um site estável, rápido e seguro, com manutenção inclusa e suporte técnico imediato para resolver qualquer questão rapidamente.'
    },
    {
      id: 'alteracoes',
      icon: <HelpCircle className="w-5 h-5" />,
      question: 'Posso fazer alterações depois?',
      answer: 'Claro! Entregamos um painel administrativo simples onde você pode alterar textos, fotos e informações básicas. Para mudanças maiores, oferecemos suporte técnico com preços justos.'
    },
    {
      id: 'sociais',
      icon: <Users className="w-5 h-5" />,
      question: 'Já tenho redes sociais, por que preciso de um site?',
      answer: 'Redes sociais são ótimas, mas um site é sua casa própria na internet. Ele dá mais controle, profissionalismo e é essencial para clientes que buscam sua empresa no Google.'
    },
    {
      id: 'mktplace',
      icon: <Zap className="w-5 h-5" />,
      question: 'Já vendo bem nos marketplaces, por que preciso de um site próprio?',
      answer: 'Um site próprio te dá liberdade para personalizar sua marca, reduzir taxas de marketplaces e fidelizar clientes. Além disso, você aparece no Google, atraindo compradores que não estão nos marketplaces.'
    }
    ,
    {
      id: 'mktplaceAfraid',
      icon: <Zap className="w-5 h-5" />,
      question: 'Tenho medo de que um site próprio seja difícil de gerenciar junto com o marketplace.',
      answer: ' e fidelizar clientes. Além disso, você aparece no Google, atraindo compradores que não estão nos marketplaces.'
    },
     {
      id: 'mktplaceStrategy',
      icon: <Zap className="w-5 h-5" />,
      question: 'E se o site não atrair clientes e eu perder o investimento?',
      answer: 'Desenvolvemos seu site com estratégias de SEO e design focado em conversão, direcionando tráfego orgânico e transformando visitantes em compradores, para que seu investimento gere retorno além do marketplace'
    },
  ];

  return (
    <section className="py-20 bg-bgPrimary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Tire suas dúvidas antes de solicitar seu orçamento
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-bgPrimary rounded-xl border-0 px-2 py-2 hover:bg-textPrimary transition-colors duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center space-x-4">
                    {/* <div className="w-10 h-10 bg-textPrimary rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {faq.icon}
                    </div> */}
                    <span className="md:text-lg text-md font-semibold text-white text-left">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white text-xs leading-relaxed pb-6 ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions? */}
          <div className="mt-12 text-center bg-gradient-to-r from-bgPrimary to-textPrimary rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem alguma dúvida?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Nossa equipe está online e pronta para te ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5548991109700"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <span className="mr-2"><Phone /></span>
                Chamar no WhatsApp
              </a>
              <div className="text-white/80 text-sm">
                Resposta garantida em até 10 minutos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;