import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { NavigationBar } from "./components/NavigationBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ChatRevive",
  description: "Recover your chats with ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <main className="h-screen w-screen bg-base-200">
          <NavigationBar/>
          {children}
        </main>
      </body>
    </html>
  );
}
