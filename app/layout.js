import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import SessionProvider from '@/utils/SessionProvider.js'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  // console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavigationBar />
            {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
