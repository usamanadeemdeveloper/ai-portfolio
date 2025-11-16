import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextGen Portfolio Studio",
  description: "NextGen Portfolio Content Management System",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export default Layout;
