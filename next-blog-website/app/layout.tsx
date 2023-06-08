import "./globals.css";
import Navbar from "./components/Navbar";
import MyProflePic from "./components/MyProflePic";

export const metadata = {
  title: "blood's Blog",
  description: "Created by hwangblood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProflePic />
        {children}
      </body>
    </html>
  );
}
