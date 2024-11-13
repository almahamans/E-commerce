import React from 'react'

import { SignIn } from './user/SignIn';
import background from '../assets/bg1-pandora.jpg'
import { Categories } from '../components/categories/Categories';

export default function HomePage() {
  return (
    <main className="mb-24">
      <section className="w-fit text-center mx-auto mb-24">
        <h1 className="text-pink-900 font-bold text-2xl">Be Love</h1>
        <p>
          From meaningful symbols to special memories, wrap up a Pandora Moments
          charm for your loved one.
        </p>
      </section>
      <section className="flex justify-around">
        <div>
          <p className="font-bold text-3xl uppercase relative">
            Discover <h1 className="ml-5 text-5xl">Pandora</h1>
          </p>
          
        </div>

        <img src={background} alt="" width="30%" />
      </section>

      {/* <section className='flex justify-around'>
        <img src={background} alt="" width="20%"/>
        <SignIn/>
      </section> */}
    </main>
  );
}
