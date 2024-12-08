'use client'

import Image from 'next/image'
import { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const menuLinks = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/portfolio' },
    { name: 'Career', href: '/portfolio' },
    { name: 'Projects', href: '/portfolio' }
  ]

  return (
    <div
      className="bg-[#FFFFFF] bg-opacity-10 backdrop-blur-sm border border-white-500 border-opacity-5 rounded-full flex items-center justify-between py-4 px-8 fixed top-10 w-full md:max-w-[700px] md:left-2/4 md:-translate-x-2/4"
    >
      <div>
        <Image
          className="h-6 w-full"
          src="/images/logo-white.png"
          alt="Logotipo primária Alvarenga Dev com texto branco e ícone azul"
          width={200}
          height={12}
        />
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        {menuLinks.map((item) => (
          <p className="text-white-200 hover:text-white-400 md:block hidden" key={item.name}>
            {item.name}
          </p>
        ))}

        <div
          className="bg-[#2d2d2d] border border-[#3c3c3c] rounded p-1 text-white block md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <MdMenu size={24} />
        </div>

        {showMobileMenu && (
          <div className="bg-background-primary absolute -top-10 left-0 right-0 w-dvw h-dvh flex items-center justify-center flex-col gap-6 ease-in duration-300">
            <MdClose
              className="absolute top-4 right-4 text-white"
              size={24}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />

            {menuLinks.map((item) => (
              <p className="text-white-200 text-2xl hover:text-white-400" key={item.name}>
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar
