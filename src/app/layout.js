import { Inter } from "next/font/google";
import "./components/styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TVOE",
  description: "Видеохостинг",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
