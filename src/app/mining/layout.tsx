import Link from 'next/link';

export default function MiningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 채광 하위 헤더 */}
      <div className="mb-4 flex gap-4 border-b pb-2">
        <Link href="/mining">정보</Link>
        <Link href="/mining/stamina">스태미나</Link>
        <Link href="/mining/convert">변환</Link>
      </div>

      {children}
    </>
  );
}
