import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <div className="flex gap-4 max-sm:flex-col">
      <Chat
        id="322131534"
        inicialMessage="bora"
        user={{
          name: "Graciano Junior",
          avatar: {
            alt: "log",
            size: 30,
            src: "/Logo.png",
            className: "rounded-full",
          },
        }}
      />
      <Chat
        id="542965832"
        inicialMessage="Bora Trabalhar"
        user={{
          name: "Cristiano Ronaldo",
          avatar: {
            alt: "log",
            size: 30,
            src: "/Logo.png",
            className: "rounded-full",
          },
        }}
      />
      <Chat
        id="510852953"
        inicialMessage="Hoje tem"
        user={{
          name: "Junior",
          avatar: {
            alt: "log",
            size: 30,
            src: "/Logo.png",
            className: "rounded-full",
          },
        }}
      />
    </div>
  );
}
