export const metadata = {
  title: 'PixelNest',
  description: 'PixelNest is a web about the creativity of UI/UX development and pixel art.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
