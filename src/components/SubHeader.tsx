'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SubHeader() {
  const pathname = usePathname()

  if (!pathname.startsWith('/ocean')) return null

  const tabs = [
    { href: '/ocean', label: '정보' },
    { href: '/ocean/stamina', label: '스태미나' },
    { href: '/ocean/gold', label: '골드 수익 최적화' },
  ]

  return (
    <div className="sub-header">
      <div className="sub-header-inner">
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={
              pathname === tab.href
                ? 'active'
                : ''
            }
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
