'use client';

import ChatBot, { Flow, Settings } from 'react-chatbotify';

// Definição do fluxo com resposta automática e teclas
const flow:Flow = {
  start: {
    message: "Olá! Como posso ajudar você?",
    options:{
        items:['Nossa localização']
    },
    
  },
  
  end: {
    message: (params) =>
      `Desculpe, não entendi "${params.currPath}". Por favor, digite exatamente uma das opções.`,
    path: "end",
  },

}

 const settings = {
    isOpen: true,
    general: {
      primaryColor: '#42b0c5',
      secondaryColor: '#491d8d',
      fontFamily: 'Arial, sans-serif',
    },
    audio: {
      disabled: false,
    },
  };
 const styles = {
    headerStyle: {
      background: '#42b0c5',
      color: '#ffffff',
      padding: '10px',
    },
    
    // ...other styles
  };

export function MyChatBot() {
    return <ChatBot settings={settings} flow={flow} styles={styles}/>;
}
