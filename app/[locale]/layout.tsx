import '../globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

const DMSans = localFont({
  src: '../fonts/DMSans-VariableFont.ttf',
  variable: '--font-dm-sans',
  weight: '400 500 600 700'
})

export const metadata: Metadata = {
  title: 'Alvarenga Dev',
  description: 'Generated by create next app'
}

type languages = 'en' | 'pt'

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  if (!routing.locales.includes(locale as languages)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={`${DMSans.variable} antialiased`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  )
}
