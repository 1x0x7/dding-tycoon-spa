'use client'
import './styles/globals.css'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Footer from '../components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <SubHeader />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
