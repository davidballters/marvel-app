import Banner from './components/Banner/Banner'
import styles from './page.module.scss'

import ListCharacter from './components/ListCharacters/ListCharacters'

export default function Home() {
  return (
    <main className={`container ${styles.content__wrapper}`}>
      <Banner />
      <ListCharacter />
    </main>
  )
}
