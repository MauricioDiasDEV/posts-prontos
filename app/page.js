import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";

// Mockup de um Post de Instagram
function InstagramMockup({ tipo, nicho }) {
  const isManicure = nicho === "manicure";

  const content = isManicure
    ? {
        bg: "bg-gradient-to-br from-rose-200 to-pink-100",
        user: "seu_salao_de_unhas",
        location: "São Paulo, SP",
        likes: "124 curtidas",
        caption:
          "Unhas maravilhosas para começar a semana! 💅✨ Agende seu horário.",
        icon: "💅",
      }
    : {
        bg: "bg-gradient-to-br from-slate-800 to-slate-900",
        user: "barbearia_premium",
        location: "São Paulo, SP",
        likes: "89 curtidas",
        caption:
          "Aquele degradê impecável para elevar o visual. ✂️🔥 Bora marcar?",
        icon: "✂️",
      };

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-[320px] mx-auto border border-slate-100 transform transition hover:-translate-y-2 duration-300">
      <div className="flex items-center p-3 gap-3 border-b border-slate-50">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-sm">
            {content.icon}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">{content.user}</p>
          <p className="text-[10px] text-slate-500">{content.location}</p>
        </div>
        <div className="ml-auto text-slate-400 font-bold text-xl leading-none">
          ...
        </div>
      </div>

      <div
        className={`aspect-square ${content.bg} flex flex-col items-center justify-center p-6 text-center`}
      >
        <span className="text-4xl mb-2">{isManicure ? "✨" : "🔥"}</span>
        <h3
          className={`text-2xl font-black ${isManicure ? "text-rose-950" : "text-amber-400"}`}
        >
          {tipo}
        </h3>
        <p
          className={`text-xs mt-2 ${isManicure ? "text-rose-800" : "text-slate-300"}`}
        >
          {isManicure
            ? "A transformação que você merece"
            : "Seu estilo, nossa assinatura"}
        </p>
      </div>

      <div className="p-3">
        <div className="flex gap-3 mb-2">
          <svg
            className="w-6 h-6 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <svg
            className="w-6 h-6 text-slate-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <p className="text-xs font-bold text-slate-900 mb-1">{content.likes}</p>
        <p className="text-xs text-slate-800">
          <span className="font-bold">{content.user}</span> {content.caption}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-16 lg:pt-32 lg:pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-rose-100/40 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 text-sm font-bold tracking-wide mb-6">
            Para Manicures e Barbearias
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Seu Instagram{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
              impecável
            </span>
            , sem estresse.
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Nós criamos a arte, escrevemos a legenda e as hashtags. Você só nos
            manda a foto do seu trabalho e aperta o botão "postar".
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#form"
              className="w-full sm:w-auto rounded-xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-lg shadow-slate-900/20 hover:scale-105 transition-transform duration-200"
            >
              Fazer 1 post grátis
            </a>
            <a
              href="#vitrine"
              className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-base font-bold text-slate-700 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
            >
              Ver exemplos reais
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-purple-200 rounded-3xl transform rotate-6 scale-105 opacity-50 blur-lg -z-10"></div>
          <InstagramMockup tipo="Antes & Depois" nicho="manicure" />
        </div>
      </section>

      {/* VITRINE */}
      <section id="vitrine" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Design que gera clientes
            </h2>
            <p className="text-lg text-slate-600">
              Esqueça o Canva e a falta de criatividade. Veja o padrão de
              qualidade que entregamos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                  💅
                </span>
                Para Salões de Unha
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <InstagramMockup tipo="Nail Art" nicho="manicure" />
                <div className="mt-12">
                  <InstagramMockup tipo="Dica de Cuidado" nicho="manicure" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-800">
                  ✂️
                </span>
                Para Barbearias
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <InstagramMockup tipo="Degradê" nicho="barbearia" />
                <div className="mt-12">
                  <InstagramMockup tipo="Cuidados" nicho="barbearia" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              3 passos. Zero dor de cabeça.
            </h2>
            <p className="text-slate-400 text-lg">
              Você foca no atendimento, nós focamos no seu marketing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: "1",
                t: "Teste Grátis",
                d: "Me manda uma foto no WhatsApp e eu crio 1 post completo de graça para você ver a qualidade.",
              },
              {
                n: "2",
                t: "Assine o plano",
                d: "Gostou? Assine o plano mensal e comece a receber seus posts.",
              },
              {
                n: "3",
                t: "Receba e poste",
                d: "Mande as fotos da semana e receba as artes, legendas e hashtags prontas em até 48h.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-rose-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                  {item.n}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.t}</h3>
                <p className="text-slate-400 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREÇO E PROPOSTA */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Um investimento que se paga
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Menos que o valor de{" "}
            <strong className="text-slate-900">1 unha de gel</strong> ou{" "}
            <strong className="text-slate-900">1 corte de cabelo</strong> por
            mês.
          </p>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-rose-200/50 overflow-hidden border border-rose-100 max-w-lg mx-auto relative transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-rose-500 py-3 text-white font-bold tracking-widest text-sm uppercase">
              Plano Premium
            </div>
            <div className="p-8 md:p-12">
              <div className="flex justify-center items-end gap-2 mb-6">
                <span className="text-2xl font-bold text-slate-500 mb-2">
                  R$
                </span>
                <span className="text-6xl font-extrabold text-slate-900 leading-none">
                  97
                </span>
                <span className="text-xl font-medium text-slate-500 mb-2">
                  /mês
                </span>
              </div>
              <ul className="space-y-4 mb-8 text-left max-w-xs mx-auto">
                {[
                  "8 posts por mês (artes + legendas)",
                  "Hashtags estratégicas inclusas",
                  "Ajustes ilimitados (até 2 rodadas)",
                  "Entrega rápida via WhatsApp",
                  "Sem contrato de fidelidade",
                ].map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      ✓
                    </div>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className="block w-full rounded-xl bg-slate-900 px-6 py-4 text-center text-lg font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-colors"
              >
                Fazer o Teste Grátis primeiro
              </a>
              <p className="text-center text-sm text-slate-500 mt-4">
                Só paga se gostar do teste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="form" className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-rose-200/50 p-8 md:p-12 border border-rose-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                Vamos fazer seu teste grátis?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Preencha os dados ao lado. Eu entro em contato no WhatsApp, você
                me manda 1 foto e eu te devolvo 1 post completo de graça.
              </p>

              <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                <h4 className="font-bold text-rose-900 mb-2">
                  Como funciona o teste?
                </h4>
                <ul className="text-sm text-rose-800 space-y-2">
                  <li>1. Preencha o formulário ao lado.</li>
                  <li>2. Me envie 1 foto do seu trabalho no WhatsApp.</li>
                  <li>3. Receba 1 arte + legenda prontas em até 24h.</li>
                  <li>4. Se gostar, assine o plano. Se não, sem problemas!</li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-[400px]">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-slate-50">
        © {new Date().getFullYear()} Posts Prontos. Feito para pequenos negócios
        brilharem.
      </footer>

      <WhatsAppButton />
    </main>
  );
}
