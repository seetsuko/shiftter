
import Link from 'next/link'
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

export const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Menu styles={menuStyle} isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <Link href='/' onClick={handleIsOpen}>
        トップ
      </Link>
      <Link href='/StaffManege' onClick={handleIsOpen}>
        スタッフ管理
      </Link>
      <Link href='/' onClick={handleIsOpen}>
        過去の人件費
      </Link>
      <Link href='/Contact' onClick={handleIsOpen}>
        お問い合わせ
      </Link>
    </Menu>
  )
}

const menuStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '4vw',
    height: '3vh',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#005b99',
  },
  bmCrossButton: {
    top: '20px !important',
    right: '30px !important',
  },
  bmCross: {
    width: '5px !important',
    height: '30px !important',
    background: '#373a47',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#4597f5',
    fontSize: '1.8em',
    paddingTop: '2em',
  },
  bmItemList: {
    color: '#fff',
  },
  bmItem: {
    display: 'inline-block',
    width: '100%',
    textDecoration: 'none',
    outline: 'none',
    borderBottom: '1px solid #fff',
    padding: '1.5em 1.5em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}
