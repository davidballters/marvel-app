import styles from './FeaturedInfo.module.scss'

export default function FeaturedInfo({ type, children, isEmpty }) {
  const classes = []

  if (type) {
    classes.push(styles[`featured_info__${type}`])
  } else {
    classes.push(styles.featured_info)
  }

  if (isEmpty) {
    classes.push(styles.empty)
  }

  return (
    <div className={classes.join(' ')}>
      {children}
    </div>
  )
}
 