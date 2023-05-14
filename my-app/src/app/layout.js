import './globals.css'
import './layout.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="wrapper">{children}</body>
    </html>
  )
}
