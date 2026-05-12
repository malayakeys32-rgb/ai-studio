export const metadata = {
  title: "AI Studio",
  description: "Your AI-powered workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

