'use client'
import { SocialsLinks } from '@/content/data'
import { openLink } from '@/utils/utils'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className="bg-[#161616]">
      <p className="font-semibold text-white-400 text-center text-xl md:text-2xl">About Me</p>

      <div className="flex flex-col md:flex-row-reverse gap-4">
        <div>
          <p className="text-white-100 text-sm mt-4 md:text-base">
            As you may have noticed, my name is Lucas Alvarenga, or also known as Alvarenga! I'm a
            highly motivated and experienced{' '}
            <span className="text-white-500 font-bold">self-taught Android Developer</span> with
            nearly <span className="text-white-500 font-bold">4 years of experience</span>{' '}
            developing high-quality mobile apps. Strong ability to design, develop and test Android
            applications, with in-depth knowledge of relevant programming languages, libraries and
            frameworks. Excellent problem-solving skills, team collaboration and self-management. I
            seek to contribute to the success of the company by providing efficient solutions in
            Android development.
          </p>

          <p className="text-white-100 text-sm mt-4 md:text-base">
            I started programming when I was{' '}
            <span className="text-white-500 font-bold">13 years old</span> precisely with Android,
            but using Java in 2017. As I was close to entering high school, I wanted to attend a
            technical school. So, the following year, I enrolled at the Rezende Rammel technical
            school to take a computer course. It was an incredible 3 years, as I increased my
            knowledge in the area. Even focusing heavily on Java and, later, on Kotlin, I was able
            to have contact with other languages such as JavaScript, Php, C, Pascal and Frameworks
            such as React.Js and Flutter.
          </p>

          <p className="text-white-100 text-sm mt-4 md:text-base">
            When the year 2020 came, I was determined to start my career as an Android Developer
            once and for all, so I went through many selection processes and interviews until I got
            an internship and was hired in only{' '}
            <span className="text-white-500 font-bold">3 months.</span> In the meantime, I've been a
            technology <span className="text-white-500 font-bold">content creator</span> since
            August 2019, where I "documented" my journey from student to software developer.
          </p>

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
