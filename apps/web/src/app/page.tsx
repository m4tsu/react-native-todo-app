// import { Inter } from '@next/font/google'
'use client'
import Image from 'next/image'

import styles from './page.module.css'

// Error [NextFontError]: Failed to fetch `Inter` from Google Fonts.
// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <div>
        <button
          style={{ border: '1px solid black', padding: 10, fontSize: 24 }}
          onClick={async () => {
            // const result = await findMany()
            // console.log({ result })
          }}
        >
          getUsers
        </button>
        <button
          style={{ border: '1px solid black', padding: 10, fontSize: 24 }}
          onClick={async () => {
            console.log('')
          }}
        >
          SignIN
        </button>
      </div>
    </main>
  )
}
