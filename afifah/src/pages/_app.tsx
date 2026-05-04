// pages/_app.tsx
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { JetBrains_Mono } from 'next/font/google'

const jbMono = JetBrains_Mono({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={jbMono.className}>
      <Component {...pageProps} />
    </div>
  )
}