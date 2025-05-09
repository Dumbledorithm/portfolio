'use client'
import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import AudioPlayer from '@/components/AudioPlayer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AudioPlayer />
      </body>
    </html>
  )
} 