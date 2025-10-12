
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: "Portfólio",
  description: "Portfólio de desenvolvedor web",
  author: "kaique Alef"
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSerif.className} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
