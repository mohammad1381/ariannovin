import "./globals.css";
import Navbar from "./NavBar";

export const metadata = {
  title: "آرین نوین",
  description: "شرکت آرین نوین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
