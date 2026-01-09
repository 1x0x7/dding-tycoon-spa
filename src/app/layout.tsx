'use client'

import './styles/globals.css'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // ----- 사이트 이름은 고정 -----
    document.title = '띵타이쿤 계산기';

    // ----- 파비콘 적용 -----
    const link: HTMLLinkElement = 
      document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon'; // 'shortcut icon' 대신 'icon' 사용
    link.href = '/favicon.ico';  // app/favicon.ico로 경로 설정
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(link);  // head에 추가
    }
  }, []); // 한 번만 실행되게 빈 배열을 넣음

  return (
    <html lang="ko">
      <head>
        {/* 여기서 제목은 고정 */}
        <title>띵타이쿤 계산기</title>
        {/* 파비콘은 app/ 폴더에 있는 favicon.ico 파일로 설정 */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <SubHeader />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
