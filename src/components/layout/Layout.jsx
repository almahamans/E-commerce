import React from 'react'
import { Header } from './header/Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { ProtectedHeader } from './header/ProtectedHeader'

export const Layout = () => {
    return (
        <main>
            <ProtectedHeader />
            <Main />
            <Footer />
        </main>
    )
}
