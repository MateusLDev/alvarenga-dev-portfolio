import Card from '../card'
import Image from 'next/image'
import ExperiencesImage from '/images/experiences-image.png'
import { MdSchool } from 'react-icons/md'
import { IoFlashOutline } from "react-icons/io5";

const Carrer: React.FC = () => {
  const experiences = [
    {
      title: 'Android Developer',
      list: [
        'Modularization and of the MVVM architecture',
        'Android Jetpack libraries',
        'Detekt',
        'AWS',
        'Jira',
        'Accessibility'
      ],
      local: 'Itaú (@BRQ)',
      icon: '/itau.svg',
      startAt: '2023',
      AndAt: 'Currently'
    },
    {
      title: 'Mid-Level Android Engineer',
      list: [
        'Modularization and of the MVVM architecture',
        'Creation of tests with JUnit 5 and MockK',
        'Android Jetpack libs',
        'Participating in Design/Discovery processes',
        'Integration with RESTful APIs',
        'Detekt'
      ],
      local: 'Bornlogic',
      icon: '/bornlogic.svg',
      startAt: 'Jul 2022',
      AndAt: 'May 2023'
    },
    {
      title: 'Junior Android Developer',
      list: [
        'Creation of new features defined by Squad',
        'Unit tests with JUnit 5 + MockK',
        'Android Jetpack libs',
        'Detekt',
        'Integration of RESTful APIs',
        'Zendesk integration'
      ],
      local: 'Bornlogic',
      icon: '/bornlogic.svg',
      startAt: 'Jan 2021',
      AndAt: 'Jul 2022'
    },
    {
      title: 'Intern Android Developer',
      list: [
        'Creation of new features & bug fixes',
        'Firebase (Crashlytics, Messaging, App Distribution...)',
        'Android Jetpack libs',
        'Picasso, Glide',
        'Android Jetpack libs'
      ],
      local: 'Bornlogic',
      icon: '/bornlogic.svg',
      startAt: 'Sep 2020',
      AndAt: 'Dec 2022'
    }
  ]

  const educations = [
    {
      title: 'Computer Technician',
      description:
        'The ETRR helps me learn about technology. I had the opportunity to learn front-end, back-end and mobile development.',
      local: 'Technical School, Rezende Rammel (ETRR), Brazil',
      icon: <MdSchool className="text-white-500 text-lg" />,
      startAt: '2018',
      AndAt: '2020'
    },
    {
      title: 'I study several courses every year',
      description:
        'I never stop learning! I believe that continuous learning is essential for unlocking our potential in a world of constant change.',
      local: '',
      icon: <IoFlashOutline className="text-white-500 text-lg" />,
      startAt: '2017',
      AndAt: 'Always'
    }
  ]

  return (
    <div className="mt-20">
      <h1 className="text-white-500 font-semibold text-2xl text-center mb-1">Carrer</h1>
      <p className="text-white-500 text-center">
        Below is a summary of my career, professional experience and education.
      </p>

      <div className='mt-4 mb-4'>
        <span className="text-white-500 font-semibold text-lg">Professional experience</span>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-8">
          <Image
            className="hidden lg:block h-[1080px] w-full object-cover rounded-lg"
            src="/images/experiences-image.png"
            alt="Imagem de experiências"
            height={0}
            width={0}
            quality={100}
            unoptimized={true}
          />

          <div>
            {experiences.map((item, index) => {
              return (
                <div className="relative pl-8 py-4 group" key={index}>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300  before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-primary after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5">
                    <Card
                      key={index}
                      title={item.title}
                      list={item.list}
                      local={item.local}
                      startAt={item.startAt}
                      AndAt={item.AndAt}
                      icon={item.icon}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div>
        <span className="text-white-500 font-semibold text-lg">Education</span>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {educations.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  local={item.local}
                  startAt={item.startAt}
                  AndAt={item.AndAt}
                  icon={item.icon}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrer
