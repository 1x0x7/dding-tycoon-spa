import Link from 'next/link';

export default function OceanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 해양 하위 헤더 */}
      <div className="mb-4 flex gap-4 border-b pb-2 font-medium">
        <Link href="/ocean">정보</Link>
        <Link href="/ocean/stamina">스태미나</Link>
        <Link href="/ocean/profit">골드 수익 최적화</Link>
      </div>

      {children}
    </>
  );
}
