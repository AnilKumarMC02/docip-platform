import "./globals.css";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        <Sidebar />

        <div className="ml-72 min-h-screen">
          <Header />

          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
