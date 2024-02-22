import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <div className="flex gap-4 max-sm:flex-col">
      <Chat
        id="322131534"
        inicialMessage="Bem-vindo(a) à Legitimuz! Estamos aqui para garantir a segurança e proteção dos nossos clientes. Como posso ajudar você hoje?"
        user={{
          name: "Graciano",
          avatar: {
            alt: "log",
            size: 30,
            src: "/logo.png",
            className: "rounded-full",
          },
        }}
      />
      <Chat
        id="542965832"
        inicialMessage="Entendemos a importância da segurança da sua identidade. Como posso fornecer informações ou assistência hoje?"
        user={{
          name: "Fernando",
          avatar: {
            alt: "log",
            size: 30,
            src: "/logo.png",
            className: "rounded-full",
          },
        }}
      />
      <Chat
        id="510852953"
        inicialMessage="Na Legitimuz, buscamos tornar o processo de verificação de identidade tão simples quanto possível para você. Como posso ajudar você a verificar sua identidade de maneira tranquila hoje?"
        user={{
          name: "Bisner",
          avatar: {
            alt: "log",
            size: 30,
            src: "/logo.png",
            className: "rounded-full",
          },
        }}
      />
    </div>
  );
}
