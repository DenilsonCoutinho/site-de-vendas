import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Clock, CreditCard, Shield, Users, Zap } from 'lucide-react';

const FAQSection = () => {
  const faqData = [
    {
      id: 'cnpj',
      icon: <Users className="w-5 h-5" />,
      question: 'Preciso ter CNPJ para fazer um site?',
      answer: 'Não necessariamente! Criamos sites tanto para empresas com CNPJ quanto para profissionais autônomos, MEI ou pessoas físicas. O importante é ter um negócio para promover online.'
    },
    {
      id: 'tempo',
      icon: <Clock className="w-5 h-5" />,
      question: 'Quanto tempo leva para ficar pronto?',
      answer: 'Sites simples ficam prontos em 3-5 dias úteis, sites mais complexos em 7-10 dias. Sempre cumprimos os prazos acordados. A velocidade é uma das nossas especialidades!'
    },
    {
      id: 'satisfacao',
      icon: <Shield className="w-5 h-5" />,
      question: 'E se eu não gostar do resultado?',
      answer: 'Oferecemos até 3 rodadas de revisão gratuitas para garantir que fique exatamente como você imaginou. Se ainda assim não ficar satisfeito, devolvemos 100% do valor investido.'
    },
    {
      id: 'pagamento',
      icon: <CreditCard className="w-5 h-5" />,
      question: 'Posso pagar parcelado?',
      answer: 'Sim! Aceitamos parcelamento no cartão de crédito em até 12x sem juros, PIX com desconto de 10%, ou 50% no início e 50% na entrega. Temos opções para todos os bolsos.'
    },
    {
      id: 'manutencao',
      icon: <Zap className="w-5 h-5" />,
      question: 'Preciso pagar mensalidade?',
      answer: 'Não! Você paga apenas uma vez e o site é seu para sempre. Oferecemos hospedagem gratuita no primeiro ano. Após isso, você pode manter conosco ou migrar para onde quiser.'
    },
    {
      id: 'alteracoes',
      icon: <HelpCircle className="w-5 h-5" />,
      question: 'Posso fazer alterações depois?',
      answer: 'Claro! Entregamos um painel administrativo simples onde você pode alterar textos, fotos e informações básicas. Para mudanças maiores, oferecemos suporte técnico com preços justos.'
    },
    {
      id: 'dominio',
      icon: <Users className="w-5 h-5" />,
      question: 'O domínio (.com.br) está incluso?',
      answer: 'Sim! O registro do domínio por 1 ano está incluso no pacote, assim como a hospedagem. Você não precisa se preocupar com nada técnico, deixa tudo com a gente.'
    },
    {
      id: 'mobile',
      icon: <Zap className="w-5 h-5" />,
      question: 'O site vai funcionar no celular?',
      answer: 'Absolutamente! Todos os nossos sites são 100% responsivos, ou seja, se adaptam perfeitamente a qualquer dispositivo: celular, tablet, computador. Mais de 70% dos acessos vêm do mobile hoje.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas antes de solicitar seu orçamento
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-gray-50 rounded-xl border-0 px-6 py-2 hover:bg-gray-100 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {faq.icon}
                    </div>
                    <span className="text-lg font-semibold text-gray-900 text-left">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6 pl-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions? */}
          <div className="mt-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ainda tem alguma dúvida?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Nossa equipe está online e pronta para te ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <span className="mr-2">💬</span>
                Chamar no WhatsApp
              </a>
              <div className="text-white/80 text-sm">
                Resposta garantida em até 2 horas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;