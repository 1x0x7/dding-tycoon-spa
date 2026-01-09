'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function DynamicTitle() {
  const pathname = usePathname()

  useEffect(() => {
    // ----- 브라우저 탭 제목 동적 변경 -----
    let title = '띵타이쿤 계산기' // 기본 제목
    if (pathname?.includes('채광')) title = '띵타이쿤 계산기 - 채광'
    else if (pathname?.includes('재배')) title = '띵타이쿤 계산기 - 재배'
    else if (pathname?.includes('해양')) title = '띵타이쿤 계산기 - 해양'

    document.title = title

    // ----- 파비콘 적용 -----
    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = '/favicon.ico' // public/favicon.ico 경로
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(link)
    }
  }, [pathname])

  return null
}
