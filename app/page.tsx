
import Card from '@/components/card'

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
    <div >
      <div>
        {arrayFic.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
