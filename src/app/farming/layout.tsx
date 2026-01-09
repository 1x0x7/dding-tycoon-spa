import Link from 'next/link';

export default function FarmingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 재배 하위 헤더 */}
      <div className="mb-4 flex gap-4 border-b pb-2 font-medium">
        <Link href="/farming">정보</Link>
        <Link href="/farming/stamina">스태미나</Link>
        <Link href="/farming/cooking">요리 효율</Link>
        <Link href="/farming/harvest">수확</Link>
      </div>

      {children}
    </>
  );
}
