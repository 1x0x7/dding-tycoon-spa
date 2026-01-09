'use client'
import Link from 'next/link'
import { useActiveTab } from '../hooks/useActiveTab'

export default function SubHeader() {
  const { mainTab, subTabs } = useActiveTab()

  // 홈에서는 서브탭 렌더링 안함
  if (mainTab === 'home') return null

  return (
    <div className="sub-header">
      <div className="sub-header-inner">
        {subTabs.map((tab) => (
          <Link key={tab} href={`/${mainTab}`} className="">
            {tab}
          </Link>
        ))}
      </div>
    </div>
  )
}
