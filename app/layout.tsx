import './globals.css'
import { Catamaran, Inter } from 'next/font/google'
import { Quicksand } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({subsets: ['latin']})
const catamaran = Catamaran({weight: "900", subsets: ["latin"]})

export const metadata = {
  title: 'AVIOR',
  description: 'Developed with create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={catamaran.className}>{children}</body>
    </html>
  )
}
