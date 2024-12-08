import Image from 'next/image'
import Button from '../button'

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center md:justify-around gap-10 lg:gap-20 mt-40 mb-20">
      <Image
        src="/images/hero-image-mobile.png"
        alt="Imagem do Lucas Alvarenga"
        height={140}
        width={140}
        className="mb-4 lg:hidden block"
      />
      
      <div className="max-w-lg" data-aos="fade-right">
        <h1 className="text-white-500 text-3xl lg:text-5xl text-center lg:text-left font-semibold leading-snug">
          Hi, I’m <span className="text-primary">Lucas Alvarenga</span> and I craft beautiful &
          optimized apps.
        </h1>

        <p className="max-w-2xl font-medium text-base lg:text-lg text-center lg:text-left text-white-400 mt-5">
          I’m Mobile developer, Speaker and Content creator at
          <span className="text-primary"> @alvarenga.dev</span>
        </p>

        <div className="flex items-center justify-center lg:justify-normal gap-6 mt-7">
          <Button color="primary" text="Enter my mentoring" />
          <Button color="secondary" text="Download my CV" />
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
