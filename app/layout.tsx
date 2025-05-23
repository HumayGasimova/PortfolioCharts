import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {store} from "../lib/store";
/* Core */
import { ReduxProvider } from './components/ReduxProvider/ReduxProvider';
import ProviderForTheme from './components/Provider/ProviderForTheme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="cupcake" id="app">
      <ReduxProvider>
        <body className={inter.className}>
          <ProviderForTheme>
            {children}
          </ProviderForTheme>
        </body>
      </ReduxProvider>
    </html>
  )
}
