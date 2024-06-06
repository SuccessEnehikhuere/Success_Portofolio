import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-6xl px-10 pt-20 ">
      <p className="text-main  pb-4 pt-8">Hello, my name is</p>
      <h2 className="font-bold text-light text-4xl sm:text-5xl lg:text-7xl capitalize">
        success enehikhuere.
      </h2>
      <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-wide text-grey capitalize font-bold">
        i build things for the web{' '}
      </h2>
      <p className="text-grey mt-5 sm:w-1/2 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        eaque perferendis atque temporibus quae, assumenda tempora voluptatum
        maiores consequatur obcaecati vel quas repellat. Beatae est, sint
        exercitationem rerum aut recusandae.
      </p>
      <div className="py-12 ">
        <a
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main border-2 border-main py-4 px-12 capitalize text-sm transition-all duration-250 ease-custom-ease hover:bg-blue-500"
        >
          check out my projects{' '}
        </a>
      </div>
    </div>
  )
}

export default HeroSection