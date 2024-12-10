'use client'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { FaArrowRight } from 'react-icons/fa'
import { openLink } from '@/utils/utils'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Marketplace List',
      description:
        'This simple shopping list App helps you to create your list and already knowing the final value of the purchase!',
      link: 'https://play.google.com/store/apps/details?id=com.alvarengadev.marketplacelist',
      image: '/images/marketplace-list.png',
      technologies: ['MVVM', 'Dagger Hilt', 'Firebase Crashlytics']
    },
    {
      name: 'Movies Reviews',
      description: 'Your/Dev Recruitment Process 2020 - Android Developer',
      link: 'https://github.com/Alvarenga-Dev/Movie-Reviews',
      image: '/images/movies-review.png',
      technologies: ['Retrofit', 'Live Data', 'Room']
    },
    {
      name: 'AlvaFlix',
      description: 'A joke with my last name Alvarenga with netflix',
      link: 'https://github.com/Alvarenga-Dev/Alvaflix',
      image: '/images/alvaflix.png',
      technologies: ['MVVM', 'Koin', 'Custom Components']
    },
    {
      name: 'Crypto - UI/UX',
      description:
        'Fictional project from Felipe Santanas Figma Course (FEUX), with the aim of improving my knowledge in Figma Tool and also in UI and UX.',
      link: 'https://www.figma.com/file/ei4iys8RFNzlXNswPVsBpI/Feux---NFT-App?node-id=404%3A5462',
      image: '/images/crypto.png',
      technologies: ['Figma', 'Components', 'Create Flows']
    },
    {
      name: 'AlvaMessager',
      description:
        'This app was able to work deeper with firebase, using it as a means of creating a new messaging app (I guess in high school I wasnt creative with names).',
      link: 'https://github.com/Alvarenga-Dev/Alva-Messenger',
      image: '/images/alvamessager.png',
      technologies: ['Kotlin', 'Firebase']
    },
    {
      name: 'Time to Sleep',
      description:
        'This project was developed when I was in the 2nd year of high school, with the aim of being an alarm clock for the deaf!',
      link: 'https://github.com/Alvarenga-Dev/Time-to-Sleep',
      image: '/images/time-to-sleep.png',
      technologies: ['Bluetooth Connection', 'Arch MVP', 'Java']
    }
  ]
  return (
    <div>
      <h1 className="text-white-500 font-semibold text-2xl text-center mb-1 mt-20">Projects</h1>
      <p className="text-white-500 text-center mx-10 mb-6">
        Here is a gallery with some projects that I developed over time.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={12}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                onClick={() => openLink(item.link)}
                className="group flex-shrink-0 w-fit h-[395px] relative cursor-pointer"
              >
                <div className="group-hover:flex hidden flex-col justify-between bg-black bg-opacity-75 h-full w-full absolute top-0 left-0 z-10 px-4 py-6 rounded-lg">
                  <div>
                    <p className="text-white-500 text-xl font-semibold mb-3">{item.name}</p>
                    <p className="text-white-400 text-sm leading-snug">{item.description}</p>

                    <div className="flex gap-2 flex-wrap mt-4">
                      {item.technologies.map((tech, index) => {
                        return (
                          <div
                            className="bg-background-tertiary border border-white-300 text-white rounded-full py-1 px-2 w-fit text-xs"
                            key={index}
                          >
                            {tech}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-primary rounded-full p-2">
                      <FaArrowRight size={16} className="text-white-500" />
                    </div>
                  </div>
                </div>

                <Image
                  className="h-[395px] w-fit object-cover"
                  src={item.image}
                  alt={item.name}
                  height={395}
                  width={250}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Projects
