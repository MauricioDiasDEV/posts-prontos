import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title:
    "Posts Prontos — O Instagram da sua Manicure ou Barbearia no automático",
  description:
    'Artes, legendas e hashtags prontas para você só apertar "postar".',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className + " bg-[#fafafa] text-slate-800 antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
