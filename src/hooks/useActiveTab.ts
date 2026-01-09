'use client'
import { usePathname } from 'next/navigation'

export function useActiveTab() {
  const pathname = usePathname()
  const mainTab = pathname.split('/')[1] || 'home'

  const subNav: Record<string, string[]> = {
    home: ['홈'], // 기존 ['업데이트', '공지'] → 하나로 통합
    mining: ['정보', '스태미나', '변환'],
    farming: ['정보', '스태미나', '요리효율', '수확'],
    ocean: ['정보', '스태미나', '골드 수익 최적화'],
  }

  return {
    mainTab,
    subTabs: subNav[mainTab] || [],
  }
}
