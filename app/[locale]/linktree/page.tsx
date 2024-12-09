'use client'
import Image from 'next/image'
const Linktree = () => {
  const socialsMedias = [
    {
      name: 'Instagram',
      url: 'https://github.com/MateusLDev/alvarenga-dev-portfolio/pull/8'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/llucasallvarenga/'
    }
  ]

  const openLink = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen w container">
      <div className="border-4 rounded-full border-primary p-1">
        <Image src="/images/linktreeImage.png" alt="fotoAlva" width={130} height={130} />
      </div>
      <div className="items-center flex flex-col">
        <p className="text-xl text-white-500 font-semibold md:text-2xl mt-2">Lucas Alvarenga</p>
        <p className="text-sm text-primary md:font-normal md:text-base">Android developer</p>
        <p className="text-sm md:font-medium text-white-400 mt-6 md:text-base">
          Meus links em um lugar só! Confira abaixo
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4 w-full md:w-auto md:min-w-96">
        {socialsMedias.map((media, index) => (
          <div
            key={index}
            className="border-2 border-white rounded-xl p-4 flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => openLink(media.url)}
          >
            <div>
              <p className="text-white text-xl md:text-2xl font-bold">{media.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Linktree
