import "./globals.css";

// * SEO & Metadata since NextJS 13.2 https://beta.nextjs.org/docs/guides/seo
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
