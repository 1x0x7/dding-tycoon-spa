'use client'
import Image from 'next/image'
import Link from 'next/link'  // next/link 추가
import { useActiveTab } from '../hooks/useActiveTab'
import { useDarkMode } from '../hooks/useDarkMode'

export default function Header() {
  const { mainTab } = useActiveTab()
  const { darkMode, toggleDarkMode } = useDarkMode() // 상태 받아오기

  const tabs = [
    { label: '홈', href: '/' },
    { label: '채광', href: '/mining' },
    { label: '재배', href: '/farming' },
    { label: '해양', href: '/ocean' },
  ]

  return (
    <header className="top-header">
      {/* ===== 비공식 공지 배너 ===== */}
      <div className="unofficial-notice">
        본 문서는 띵타이쿤 온라인의 공식 문서가 아닙니다. 본 문서의 내용은 일부 실제 내용과 다를 수 있습니다.
      </div>

      <div className="header-inner">
        {/* 로고 클릭 시 다크모드 토글, 홈 이동 제거 */}
        <div
          className="logo"
          onClick={toggleDarkMode} 
          style={{ cursor: 'pointer' }}
        >
          <Image
            src={darkMode ? '/1x0x7_2.png' : '/1x0x7_.png'} // 다크모드 이미지 전환
            alt="1x0x7 Logo"
            width={40}
            height={40}
          />
        </div>

        <nav className="main-nav">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={mainTab === tab.href.slice(1) ? 'active' : ''}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
