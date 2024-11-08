import React from 'react'

import { Main } from './Main'
import { Footer } from './Footer'
import { ProtectedNavBar } from './header/ProtectedNavBar'

export const Layout = () => {
    return (
        <main>
            <ProtectedNavBar />
            <Main />
            <Footer />
        </main>
    )
}
