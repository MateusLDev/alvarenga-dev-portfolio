
import Card from '@/components/card'
import NavBar from '@/components/navbar'
import {useTranslations} from 'next-intl';

const arrayFic = [
  {
    icon: 'imagem',
    title: 'Frontend Developer',
    local: 'Localização',
    startAt: 'Data de Início',
    AndAt: 'Data de Término',
    description: 'Descrição'
  },
  {
    icon: 'imagem',
    title: 'Frontend Developer',
    local: 'Localização',
    startAt: 'Data de Início',
    AndAt: 'Data de Término',
    description: 'Descrição',
    list: ['Tecnologias', 'Tecnologias 2', 'Tecnologias 3', 'Tecnologias 4', 'Tecnologias 5']
  },
]

export default function Home() {
  const t = useTranslations('HomePage');
  const about = useTranslations('about');

  return (
    // px-4 md:px-0
    <div className="bg-background-primary h-dvh ">
      {/* <div>
    <div >
      <div>
        <h1>{about()}</h1>

        {arrayFic.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div> */}

      <NavBar />
    </div>
  )
}