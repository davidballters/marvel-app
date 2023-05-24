import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className="container">
        <div className={styles.header__wrapper}>
          <figure className={styles.header__logo}>
            <Image
              src="/images/logoa.svg"
              width={150}
              height={60}
              alt="Logo"
            />
          </figure>
          <nav className={styles.header__menu}>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#" >Personajes</Link>
              </li>
            </ul>
          </nav>
          <ul className={styles.header__actions}>
            <li>
              <Link href="#">
                <svg
                  width={18}
                  height={20}
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8624 5.78482C14.8624 4.29825 14.2719 2.87256 13.2207 1.82139C12.1696 0.770227 10.7439 0.179688 9.25731 0.179688C7.77074 0.179688 6.34505 0.770227 5.29388 1.82139C4.24272 2.87256 3.65218 4.29825 3.65218 5.78482C3.65218 12.3241 0.849609 14.1925 0.849609 14.1925H17.665C17.665 14.1925 14.8624 12.3241 14.8624 5.78482Z"
                    fill="#F0E6D2"
                  />
                  <path
                    d="M10.8749 17.7324C10.7106 18.0156 10.4749 18.2506 10.1913 18.4139C9.90762 18.5773 9.58604 18.6633 9.25872 18.6633C8.9314 18.6633 8.60983 18.5773 8.32619 18.4139C8.04256 18.2506 7.80682 18.0156 7.64258 17.7324"
                    fill="#F0E6D2"
                  />
                  <path
                    d="M10.8749 17.7324C10.7106 18.0156 10.4749 18.2506 10.1913 18.4139C9.90762 18.5773 9.58604 18.6633 9.25872 18.6633C8.9314 18.6633 8.60983 18.5773 8.32619 18.4139C8.04256 18.2506 7.80682 18.0156 7.64258 17.7324"
                    stroke="#A8A8A8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0744 4.4684C13.5746 5.18572 13.9265 6.01408 14.0859 6.90909H16V9.09091H14.0859C13.9265 9.98592 13.5746 10.8143 13.0744 11.5316L14.4282 12.8855L12.8855 14.4282L11.5316 13.0744C10.8143 13.5746 9.98592 13.9265 9.09091 14.0859V16H6.90909V14.0859C6.01408 13.9265 5.18572 13.5746 4.4684 13.0744L3.11454 14.4282L1.57176 12.8855L2.92562 11.5316C2.42545 10.8143 2.07349 9.98592 1.91413 9.09091H0V6.90909H1.91413C2.07349 6.01408 2.42545 5.18572 2.92562 4.4684L1.57176 3.11454L3.11454 1.57176L4.4684 2.92562C5.18572 2.42545 6.01408 2.07349 6.90909 1.91413V0H9.09091V1.91413C9.98592 2.07349 10.8143 2.42545 11.5316 2.92562L12.8855 1.57176L14.4282 3.11454L13.0744 4.4684Z"
                    fill="#F0E6D2"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}