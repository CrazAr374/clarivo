import './globals.css'

export const metadata = {
  title: 'Clarivo - AI-Powered Data Analysis Platform',
  description: 'Transform raw data into clear insights with Clarivo\'s AI-powered data analysis, visualization, and cleaning tools for everyone.',
  keywords: 'AI data analysis, data visualization, data cleaning, business intelligence, analytics platform',
  authors: [{ name: 'Clarivo Team' }],
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
  },
  openGraph: {
    title: 'Clarivo - AI-Powered Data Analysis Platform',
    description: 'Transform raw data into clear insights with AI-powered analytics',
    url: 'https://clarivo.ai',
    siteName: 'Clarivo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarivo - AI-Powered Data Analysis Platform',
    description: 'Transform raw data into clear insights with AI-powered analytics',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}