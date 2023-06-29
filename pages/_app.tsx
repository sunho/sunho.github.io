import './globals.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

 
export default function App({ Component, pageProps, router }: AppProps) {
  return <Layout isBlog={router.pathname.startsWith('/shaders/')}> 
    <Component {...pageProps} />
  </Layout>
}