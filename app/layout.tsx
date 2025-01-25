import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "The Folding Company",
  description: "a trusted platform for financial management and asset growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`antialiased`}
      >
        
        {children}
        
        
        
      </body>
    </html>
  );
}
