import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets : ["latin"],
  weight : ["100","200","300","400","500","600","700","800","900"]
});
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className,"light","antialiased")}>{children}</body>
    </html>
  )
}