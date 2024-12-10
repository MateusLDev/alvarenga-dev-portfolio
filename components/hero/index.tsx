'use client'
import Image from 'next/image'
import Button from '../button'
import { useTranslations } from 'next-intl'
import { openLink } from '@/utils/utils'

const Hero: React.FC = () => {
  const t = useTranslations('hero')

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Lucas Alvarenga CV.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center md:justify-around gap-10 lg:gap-20 mt-40 mb-20 bg-[url('/images/hero-bg-png')]">
      <Image
        src="/images/hero-image-mobile.png"
        alt="Imagem do Lucas Alvarenga"
        height={140}
        width={140}
        className="mb-4 lg:hidden block"
      />

      <div className="max-w-lg" data-aos="fade-right">
        <h1 className="text-white-500 text-3xl lg:text-5xl text-center lg:text-left font-semibold leading-snug">
          {t('saudation')} <span className="text-primary">Lucas Alvarenga</span> {t('saudation2')}
        </h1>

        <p className="max-w-2xl font-medium text-base lg:text-lg text-center lg:text-left text-white-400 mt-5">
          {t('description')}
          <span onClick={() => openLink('https://instagram.com/alvarenga.dev')} className="text-primary cursor-pointer"> @alvarenga.dev</span>
        </p>

        <div className="flex items-center justify-center lg:justify-normal gap-6 mt-7">
          <Button
            onClick={() => openLink('https://superpeer.com/alvarengadev')}
            color="primary"
            text={t('mentoringButton')}
          />
          <Button onClick={downloadCV} color="secondary" text={t('cvButton')} />
        </div>
      </div>

      <Image
        data-aos="fade-left"
        src="/images/hero-image.png"
        alt="Imagem do Lucas Alvarenga"
        height={100}
        width={120}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-[560px] w-[400px] object-cover rounded-xl lg:block hidden"
      />
    </div>
  )
}

export default Hero
