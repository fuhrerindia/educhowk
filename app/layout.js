import constants from "@/constants";
export const metadata = {
  title: `Search Collage, Universties and Courses in India - ${constants.appName}`,
  description: constants.description,
  keywords: constants.keywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
