'use client';

import { ChartBarIcon, MessageCircle, UserRound } from 'lucide-react';
import ChatBot, { Flow, Params, Settings, Styles } from 'react-chatbotify';
import iconMessage from '@/assets/messenger.svg'
// Definição do fluxo com resposta automática e teclas
const flow: Flow = {
  start: {
    message: "Olá! Como posso ajudar você?",
    options: ['Valores', 'Prazo de entrega', 'O que está incluso?', 'Falar com um Progamador'],
    path: "handle_faq"
  },

  handle_faq: {
    message: async (params: Params) => {
      const userInput = params.userInput;
      console.log
      let reply = '';
      switch (userInput.toLowerCase()) {
        case 'valores':
          reply = 'Nossos sites têm valores a partir de R$ 690, podendo variar conforme as funcionalidades que você deseja incluir. Se quiser um orçamento mais exato, posso te ajudar com algumas perguntas rápidas!';
          break;
        case 'prazo de entrega':
          reply = 'O prazo de entrega geralmente varia entre 3 a 5 dias úteis, dependendo da complexidade do site. Sites mais simples podem ser entregues até antes';
          break;
        case 'o que está incluso?':
          reply = `•Layout moderno e responsivo\n\n•Integração com WhatsApp ou redes sociais\n\n•Página de contato\n\n•Suporte técnico nos primeiros 30 dias`;
          break;

        case 'falar com um progamador':
          window.open(
            'https://wa.me/5548991109700?text=olá, gostaria de falar com um progamador',
            '_blank'
          );
          reply = 'Vamos te encaminhar para um progamador!';
          break;

        default:
          reply = "Por favor, selecione uma das opções.";
          break;
      }
      await params.injectMessage(reply);
    },
    options: ['Tenho mais dúvidas'],
    path: 'start',
    chatDisabled: true,
  },

}

const settings: Settings = {
  header: {
    title: (
      <div className='flex items-center gap-2' style={{ cursor: "pointer", margin: 0, fontSize: 18, fontWeight: "normal" }} onClick={
        () => { }
      }>
        <div className='bg-white w-9 h-9 rounded-full flex items-center justify-center'>
          <UserRound className='text-black' />
        </div>
        Progamador
      </div>
    ),
    showAvatar: false,
    avatar: 'a',
  },
  chatHistory: {
    disabled: true,
    autoLoad: false,
  },
  footer: { text: null },
  tooltip: {
    mode: "CLOSE",
    text: "Alguma dúvida?",
  },
  chatButton: {
    icon:iconMessage,
  },
  general: {
    primaryColor: '#c70000',
    secondaryColor: '#c73349',
    fontFamily: 'Arial, sans-serif',
  },
  chatInput: {
    disabled: true
  },
  audio: {
    disabled: false,
  },

};
const styles: Styles = {
  headerStyle: {
    background: '#c70000',
    color: '#ffffff',
    padding: '10px',
  },
  tooltipStyle: {
    fontSize: 17,
    padding: 9
  },
  sendButtonDisabledStyle: {
    backgroundColor: '#a1a1a1',
    cursor: 'not-allowed',
  },
  chatButtonStyle: {
    backgroundColor: '#fff',
    borderRadius: '50%',

    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  chatIconStyle: {
    fill: 'white',
    width: '30px',
    height: '30px',
  },
  chatWindowStyle: {
    borderRadius: '16px',
    width: '400px',
    height: '500px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f5f5f7',
  },

};

export function MyChatBot() {
  return <ChatBot  settings={settings} flow={flow} styles={styles} />;
}
