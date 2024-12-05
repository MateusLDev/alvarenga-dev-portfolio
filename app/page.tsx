
import Card from '@/components/card'
import AboutMe from '@/components/aboutMe/'


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
  return (
    <div className='container mx-auto px-4'>
      <div>
        {arrayFic.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
        <AboutMe />
    </div>
  )
}
