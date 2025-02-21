import "./globals.css";

export const metadata = {
  title: "Blog",
  description: "Share you opinion",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-milk overflow-x-hidden font-quick">
        {children} 
      </body>
    </html>
  );
}

export default RootLayout