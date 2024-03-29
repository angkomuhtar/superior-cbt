import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/section/user/navbar";

const inter = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Super-CBT",
  description: "Computer Based Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <main className='container h-full'>{children}</main>
      </body>
    </html>
  );
}
