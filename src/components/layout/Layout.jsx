import React from 'react'

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
