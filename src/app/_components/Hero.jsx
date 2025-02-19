import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
        <section className="bg-gray-50 flex items-center flex-col">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Manage Your Expenses
        <strong className="font-extrabold text-blue-700 sm:block"> Efficiently. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        FreeExpenses is a free tool that helps you manage your expenses and income. It provides a simple and intuitive interface that allows you to track your expenses and income easily.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded-sm bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:ring-3 focus:outline-hidden sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>

      </div>
    </div>
  </div>
  <Image src="/hero.jpg" alt="hero" width={800} height={800} className='-mt-9 round-xl border'/>
</section>
    
  )
}

export default Hero
