import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'
import Main from './Main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GVK learn to Design',
  description: 'Created for whom are passionate to learn designing'
}

export default function RootLayout () {
  return (
    <>
      <Head>
        <link rel='icon' href='/images/icons/gvklogo.png' />
      </Head>
      <html lang='en'>
        <body id='root'>
          <Main />
        </body>
      </html>
    </>
  )
}
