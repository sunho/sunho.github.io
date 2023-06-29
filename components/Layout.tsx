import { Inter } from 'next/font/google'
import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  isBlog
}: {
  children: React.ReactNode,
  isBlog: boolean
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <Link href="/">
            <h1 className="text-3xl font-extrabold">
            Sunho Kim
            </h1>
          </Link>
          <div className="flex items-center text-base leading-5">
            <div className="block">
              <a className="p-2 font-medium text-blue-500" href="/cv.pdf">
                Resume <AiFillFilePdf className="inline-block"/>
              </a>
              <a className="p-2 font-medium text-black-500" href="https://github.com/sunho">
                Github <AiFillGithub className="inline-block"/>
              </a>
              <a className="p-2 font-medium text-black-500" href="https://www.linkedin.com/in/sunho-kim-921886275/">
                LinkedIn  <AiFillLinkedin className="inline-block"/>
              </a>
            </div>
          </div>
        </header>
        <main className={"mb-auto " + (isBlog ? "prose" : "")}>
          {children}
        </main>
      </div>
    </div>  
  )
}
