import React from 'react'
import { Header } from './header/Header'
import { Main } from './Main'
import { Footer } from './Footer'

export const Layout = () => {
    return (
        <main>
            <Header />
            <Main />
            <Footer />
        </main>
    )
}
