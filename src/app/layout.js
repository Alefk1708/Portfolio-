import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const themeScript = `
  (function () {
    try {
      var saved = localStorage.getItem('portfolio-theme');
      var preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      document.documentElement.dataset.theme = saved || preferred;
    } catch (error) {
      document.documentElement.dataset.theme = 'dark';
    }
  })();
`;

export const metadata = {
  title: "Kaique Alef | Desenvolvedor Full Stack",
  description:
    "Portfólio de Kaique Alef: desenvolvimento web, mobile, APIs, .NET, Godot e inteligência artificial.",
  authors: [{ name: "Kaique Alef" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090c" },
    { media: "(prefers-color-scheme: light)", color: "#f5f4f1" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${dmSerif.className} antialiased`}>{children}</body>
    </html>
  );
}
