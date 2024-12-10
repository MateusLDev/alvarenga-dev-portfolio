'use client'
import { SocialsLinks, footerData } from '@/content/data'
import { openLink } from '@/utils/utils'
import Image from 'next/image'

import { useTranslations } from 'next-intl';

// const SocialsLinks = [
//   {
//     name: 'Instagram',
//     icon: <FaInstagram size={24} className="text-gray-500 hover:text-white-500 cursor-pointer" />,
//     link: 'https://www.instagram.com/alvarenga.dev/'
//   },
//   {
//     name: 'LinkedIn',
//     icon: <FaLinkedinIn size={24} className="text-gray-500 hover:text-white-500 cursor-pointer" />,
//     link: 'https://www.linkedin.com/in/llucasallvarenga/'
//   },
//   {
//     name: 'GitHub',
//     icon: <FaGithub size={24} className="text-gray-500 hover:text-white-500 cursor-pointer" />,
//     link: 'https://github.com/Alvarenga-Dev'
//   },
//   {
//     name: 'YouTube',
//     icon: <FaYoutube size={24} className="text-gray-500 hover:text-white-500 cursor-pointer" />,
//     link: 'https://www.youtube.com/channel/UCefw6voAiaqil3KAqMfLPyg/about'
//   },
//   {
//     name: 'Twitch',
//     icon: <FaTwitch size={24} className="text-gray-500 hover:text-white-500 cursor-pointer" />,
//     link: 'https://www.twitch.tv/alvarengadev'
//   }
// ]

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  const MAVUE_DEV = 'https://www.mavuedev.com/'
  const TG_DEV = 'https://portfolio-novo-qrrj.vercel.app/'

  return (
    <div className="bg-background-secondary w-full py-8">
      <div className="container">
        <div className="flex flex-col md:align-baseline md:flex-row md:justify-between border-b border-background-quaternary pb-8">
          <div>
            <Image
              src="/images/logo-white.png"
              width={226}
              height={40}
              alt="logo"
              className="mx-auto md:mx-0"
            />
            <p className="text-white-300 mt-2 italic text-sm text-center md:text-left">
              "We shouldn't do things expecting something in return. <br /> Do what needs to be done
              and the reward will come naturally in its time."
            </p>
          </div>

          <div className="flex flex-col mx-auto md:mx-0">
            <p className="text-white-400 font-semibold text-xl mb-3 mt-6 text-center md:mt-0 md:text-left">
              {t('socialLinks')}
            </p>

            <div className="flex gap-4">
              {SocialsLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <Icon
                    onClick={() => openLink(item.link)}
                    key={index}
                    size={24}
                    className="text-gray-500 hover:text-white-500 cursor-pointer"
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-6">
          <p className="text-white-300">© {t('copyright')}</p>
          <p className="text-white-300">
            {t('developedBy')} {' '}
            <span
              onClick={() => openLink(MAVUE_DEV)}
              className="text-primary cursor-pointer hover:underline"
            >
              Mavue Dev
            </span>{' '}
            &{' '}
            <span
              onClick={() => openLink(TG_DEV)}
              className="text-primary cursor-pointer hover:underline"
            >
              Tg Dev
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
