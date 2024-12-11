import SEO from '@/components/SEO'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import '../globals.css'
import { AOSInit } from './aos'

const DMSans = localFont({
  src: '../fonts/DMSans-VariableFont.ttf',
  variable: '--font-dm-sans',
  weight: '400 500 600 700'
})

export const metadata: Metadata = {
  title: 'Alvarenga Dev | Android Engineer',
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
      <SEO
        title="Alvarenga Dev | Android Engineer"
        description="Sou um desenvolvedor Android apaixonado por criar aplicativos funcionais, intuitivos e de alto desempenho. Com experiência em arquitetura MVVM, Android Jetpack, e integração de APIs RESTful, meu foco é entregar soluções escaláveis e centradas no usuário. Já atuei em projetos que envolveram desde a modularização de grandes sistemas até a criação de testes automatizados com ferramentas como JUnit e MockK"
        url="https://www.alvarenga.dev/"
        image="/images/aboutMe.png"
        keywords="android-developer, android-engineer, kotlin"
        author="Mavue Dev e Tg Dev"
      />

      <NextIntlClientProvider messages={messages}>
        <AOSInit />
        <body className={`${DMSans.variable} antialiased`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  )
}
