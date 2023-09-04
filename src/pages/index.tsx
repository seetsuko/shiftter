'use client'

import dayjs from 'dayjs'
import Head from 'next/head'
import { MembersAndSearch } from '@/components/MembersAndSearch'
import Toptext from '@/components/Toptext'

export default function Home() {
  const today = dayjs()
  const costTotal = '12345'

  return (
    <>
      <Head>
        <title>Ginpacchi</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Toptext date={true} text='￥　12345' variant='main' />
        <MembersAndSearch />
      </main>
    </>
  )
}
