
import type { AppProps } from 'next/app'
import styled,{ createGlobalStyle } from 'styled-components'
import { Header } from '../components/Header'
import { Menubar } from '@/components/Menubar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Menubar />
      <PageStyle>
      <Component {...pageProps} />
      </PageStyle>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #faf0db;

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`
const PageStyle = styled.main`
  width: 95%;
  margin: 0 auto;
  background-color: #fff;
`