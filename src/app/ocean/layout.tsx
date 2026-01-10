'use client'

export default function OceanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="page">
      <div className="home-block">
        {children}
      </div>
    </main>
  )
}
