'use client'
import { useEffect, useState, Fragment, useContext } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { motion, useDragControls } from 'framer-motion'
import styles from './ListCharacters.module.scss'
import ReactPaginate from 'react-paginate'

import CardCharacter from '../CardCharacter/CardCharacter'
import { usePrevious } from '../../hooks/usePrevious'
import characterContext from '@/app/context/CharacterContext'
import Loader from '../Loader/Loader'

export default function ListCharacter() {
  const { characters, isLoading, getCharacters } = useContext(characterContext)
  const [currentPage, setCurrentPage] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const previousCurrentPage = usePrevious(currentPage) ?? 0
  const controls = useDragControls()
  // Pagination settings
  const itemsPerPage = 5
  const endOffset = itemOffset + itemsPerPage
  const currentCharacters = characters.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(characters.length / itemsPerPage)

  useEffect(() => {
    getCharacters()
  }, [])

  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
    const newOffset = (event.selected * itemsPerPage) % characters.length
    setItemOffset(newOffset)
  }

  if (isLoading) return <Loader />

  return (
    <Fragment>
      <motion.div
        key={currentPage}
        drag="x"
        draggable
        dragSnapToOrigin
        dragControls={controls}
        onDragEnd={(_, info) => {
          if (info.offset.x > 50 && !!currentPage) {
            handlePageClick({ selected: currentPage - 1 })
          } else if (info.offset.x < -50 && currentPage < (pageCount - 1)) {
            handlePageClick({ selected: currentPage + 1 })
          }
        }}
        transition={{ duration: 0.4, ease: 'linear' }}
        animate={{ x: [currentPage > previousCurrentPage ? 100 : -100, 0], opacity: [0, 1] }}
        className={styles.cards}
      >
        {currentCharacters.map((character) => (
          <CardCharacter
            key={character.id}
            {...character}
          />
        ))}
      </motion.div>

      <ReactPaginate
        className={styles.pagination}
        nextLabel={<GrFormNext />}
        nextClassName={styles.arrow}
        previousClassName={styles.arrow}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        forcePage={currentPage}
        pageClassName={styles.pagination__item}
        pageLabelBuilder={(page) => <span>{page}/{pageCount}</span>}
        activeClassName={styles.selected}
        previousLabel={<GrFormPrevious />}
        renderOnZeroPageCount={null}
      />
    </Fragment>
  )
}
