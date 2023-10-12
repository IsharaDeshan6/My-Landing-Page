import './globals.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ishara Deshan - Landing Page',
  description: 'My Personal Landing Page',
  icons:"/images/latestme.jpeg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"suppressContentEditableWarning>
      <body className={sora.className}>
        <div className='max-w-xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
