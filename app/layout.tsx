import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Readability Grader",
  description: "Grade content readability for different education levels. Analyze text with Flesch-Kincaid, SMOG, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="31119629-5542-4ac8-934f-3e164e313e59"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
