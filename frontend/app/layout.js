import BootstrapClient from "@/components/libraries/Bootstrap";
import "./globals.css";
import Header from "@/components/layout/Header";
import ToastContainer from '@/components/libraries/Toastify'


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
        <ToastContainer />
        <BootstrapClient />
      </body>
    </html>
  );
}
