'use client'
import { usePathname } from 'next/navigation'

export function useActiveTab() {
  const pathname = usePathname() || '/'
  const mainTab: string = pathname.split('/')[1] || 'home'

  const subNav: Record<string, string[]> = {
    home: ['홈'], // 홈일 때는 서브탭 하나
    mining: ['정보', '스태미나', '변환'],
    farming: ['정보', '스태미나', '요리효율', '수확'],
    ocean: ['정보', '스태미나', '골드 수익 최적화'],
  }

  const subTabs: string[] = subNav[mainTab] || []

  return { mainTab, subTabs }
}
