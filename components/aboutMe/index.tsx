'use client'
import { SocialsLinks } from '@/content/data'
import { openLink } from '@/utils/utils'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AboutMe = () => {
  const t = useTranslations('about')

  return (
    <div className="bg-[#161616]">
      <p className="font-semibold text-white-400 text-center text-xl md:text-2xl">{t('title')}</p>

      <div className="flex flex-col md:flex-row-reverse gap-4">
        <div>
          <p
            className="text-white-100 text-sm mt-4 md:text-base"
            dangerouslySetInnerHTML={{ __html: t.raw('content') }}
          ></p>

          <div className="flex gap-5 mt-6 cursor-pointer">
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

        <Image
          className="mt-6 h-72 md:h-[500px] w-full"
          src="/images/aboutMe.png"
          alt="About Me"
          width={299}
          height={298}
        />
      </div>
    </div>
  )
}
export default AboutMe
