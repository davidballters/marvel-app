import { useContext, useState } from 'react'
import Image from 'next/image'
import styles from './CardCharacter.module.scss'

import CharacterContext from '@/app/context/CharacterContext'

export default function CardCharacter(props) {
  const { thumbnail, name, comics, series } = props
  const { setSelectedCharacter } = useContext(CharacterContext)

  return (
    <article className={styles.card} onClick={() => setSelectedCharacter(props)}>
      <header className={styles.card__title}>
        <h3>{name}</h3>
      </header>
      <figure className={styles.card__avatar}>
        <Image
          src="/images/avatar_card.svg"
          alt="Image Placeholder"
          width={180}
          height={180}
        />

        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="Image"
          className={styles.avatar}
        />
      </figure>
      <div className={styles.card__comics}>Comics: <span>{comics.available}</span></div>
      <div className={styles.card__movies}>Movies: <span>{series.available}</span></div>
    </article>
  )
}
