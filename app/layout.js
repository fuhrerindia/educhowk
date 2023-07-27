import Header from "@/widgets/header/header";
import "./globals.css";
import constants from "@/constants";
import Footer from "@/widgets/footer/footer";


export const metadata = {
  title: `Search Collage, Universties and Courses in India - ${constants.appName}`,
  description: constants.description,
  keywords: constants.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
