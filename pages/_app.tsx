import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <div>
      <nav>
        <Link href={"/"}>
          Showcase Entry
        </Link>
      </nav>
      <Component {...pageProps} />

    </div>)
}

export default MyApp
