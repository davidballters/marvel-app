import '@/styles/global.scss'

import Header from './components/Header/Header'
import CharacterState from './context/CharacterState'

export const metadata = {
  title: 'Marvel App',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CharacterState>
          {children}
        </CharacterState>
      </body>
    </html>
  )
}
