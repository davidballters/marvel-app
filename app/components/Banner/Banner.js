'use client'
import { Fragment, useContext } from 'react'

import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'
import Progressbar from '../ProgressBar/Progressbar'
import characterContext from '@/app/context/CharacterContext'

export default function Banner() {
  const { selectedCharacter } = useContext(characterContext)
  const goalSeries = 100

  return (
    <Fragment>
      <FeaturedInfo>
        <FeaturedInfo type="progress-bar" isEmpty={selectedCharacter == null}>
          {selectedCharacter ? (
            <Fragment>
              <h3>Progreso peliculas producidas</h3>
              <Progressbar
                goalSeries={goalSeries}
                totalSeries={selectedCharacter.series.available}
                progress={Math.ceil(selectedCharacter.series.available % goalSeries)}
              />
            </Fragment>
          ) : <h3>Selecciona un personaje</h3>}
        </FeaturedInfo>

        <FeaturedInfo type="video">
          <iframe
            src="https://www.youtube.com/embed/8wi4gXSRvH8"
            title="The Marvels | Tráiler Oficial | Subtitulado"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </FeaturedInfo>

        <FeaturedInfo type="image">
          <img src="https://wallpaperaccess.com/full/54674.jpg" />
        </FeaturedInfo>
      </FeaturedInfo>
    </Fragment>
  )
}
