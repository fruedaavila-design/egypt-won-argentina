import "./globals.css";

export const metadata = {
  title: "Egypt Won Argentina",
  description: "According to the Internet. Correct history.",
  openGraph: {
    title: "Egypt Won Argentina",
    description: "The Internet has spoken.",
    url: "https://egyptwonargentina.com",
    siteName: "Egypt Won Argentina",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Egypt Won Argentina",
    description: "The Internet has spoken."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
