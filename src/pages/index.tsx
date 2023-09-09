import dayjs from 'dayjs'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import { MembersAndSearch } from '@/components/MembersAndSearch'
import ShiftTable from '@/components/ShiftTable/ShiftTable '
import Toptext from '@/components/common/Toptext/TopText'

type EventData = {
  date: Date
  description: string
}

export default function Home() {
  const costTotal = '12345'
  const date = dayjs()
  const daysInMonth = date.daysInMonth()
  const daysArray = [...Array(daysInMonth).keys()].map((day) => day + 1)
  const [events, setEvents] = useState<EventData[]>([
    // シフトデータの例
    {
      date: new Date(),
      description: '12〜15',
    },
  ])

  return (
    <>
      <Head>
        <title>Ginpacchi</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContainer>
        <Toptext date={true} text={`￥　${costTotal}`} variant='main' />
        <ShiftTable selectedDate={date} daysArray={daysArray} events={events} />
        <MembersAndSearch />
      </MainContainer>
    </>
  )
}

const MainContainer = styled.main`
  /* width: 95%;
  margin: 0 auto;
  background-color: #fef5eb; */
`
