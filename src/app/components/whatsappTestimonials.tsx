import React from 'react';
import { CheckCheck, Clock } from 'lucide-react';

interface WhatsAppMessage {
  id: number;
  name: string;
  time: string;
  message: string;
  isRead: boolean;
}

const whatsappMessages: WhatsAppMessage[] = [
  {
    id: 1,
    name: "Carlos - Advogado",
    time: "14:32",
    message: "Cara, muito obrigado! O site ficou perfeito! Já estou recebendo contatos de novos clientes. Valeu cada centavo! 🙏",
    isRead: true
  },
  {
    id: 2,
    name: "Fernanda - Dentista",
    time: "16:45",
    message: "Pessoal, vocês são demais! Meu consultório já está lotado depois do site. Pacientes estão elogiando o design e facilidade para agendar ❤️",
    isRead: true
  },
  {
    id: 3,
    name: "Roberto - Restaurante",
    time: "19:20",
    message: "Site top demais! As vendas online aumentaram 300%. Minha esposa não acreditava que ia funcionar assim rsrs. Parabéns pelo trabalho! 🚀",
    isRead: true
  },
  {
    id: 4,
    name: "Ana - Personal Trainer",
    time: "08:15",
    message: "Gente, não consigo mais atender tanta gente! O site está trazendo alunos todo dia. Vou ter que contratar mais um funcionário! Obrigada! 💪",
    isRead: true
  }
];

const WhatsAppTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Olha só o que nossos clientes estão falando
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mensagens reais que recebemos após a entrega dos sites
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp header */}
          <div className="bg-[#075e54] rounded-t-3xl p-4 mb-1">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-[#075e54] font-bold">W</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Clientes Satisfeitos</h3>
                <p className="text-green-200 text-sm">online agora</p>
              </div>
            </div>
          </div>

          {/* Messages container */}
          <div className="bg-[#e5ddd5] rounded-b-3xl p-6 space-y-4 max-h-96 overflow-y-auto">
            {whatsappMessages.map((message, index) => (
              <div key={message.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Message bubble */}
                <div className="flex justify-end mb-4">
                  <div className="max-w-xs lg:max-w-md">
                    {/* Client name and time */}
                    <div className="text-xs text-gray-600 mb-1 text-right">
                      {message.name} • {message.time}
                    </div>
                    
                    {/* Message content */}
                    <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-md p-4 shadow-sm">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {message.message}
                      </p>
                      
                      {/* Read status */}
                      <div className="flex items-center justify-end mt-2">
                        <span className="text-xs text-gray-500 mr-1">{message.time}</span>
                        {message.isRead ? (
                          <CheckCheck className="w-4 h-4 text-blue-500" />
                        ) : (
                          <CheckCheck className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your response */}
                <div className="flex justify-start mb-6">
                  <div className="max-w-xs lg:max-w-md">
                    <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm">
                      <p className="text-gray-800 text-sm">
                        {index === 0 && "Fico muito feliz em saber! Sucesso sempre! 🎉"}
                        {index === 1 && "Que maravilha! Obrigado pela confiança! 😊"}
                        {index === 2 && "Isso é incrível! Parabéns pelo crescimento! 🎊"}
                        {index === 3 && "Hahaha problema bom esse! Sucesso total! 😄"}
                      </p>
                      
                      <div className="flex items-center justify-end mt-2">
                        <span className="text-xs text-gray-500 mr-1">
                          {String(Number(message.time.split(':')[0]) + 1).padStart(2, '0')}:
                          {message.time.split(':')[1]}
                        </span>
                        <CheckCheck className="w-4 h-4 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg mb-4">
              <strong>Quer ser o próximo a enviar uma mensagem dessas?</strong>
            </p>
            <div className="inline-flex items-center bg-[#25d366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#22c55e] transition-colors duration-200 cursor-pointer">
              <span className="mr-2">💬</span>
              Falar no WhatsApp Agora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTestimonials;