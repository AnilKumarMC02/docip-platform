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
      <body>
        <div className="flex">
          <Sidebar />

          <div className="flex-1">
            <Header />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
