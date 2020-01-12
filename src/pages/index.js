import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faVk,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons'
import '../styles/global.less'
import styles from '../styles/index.module.less'
import avatar from '../images/avatar.png'

export default () => (
  <div className="wrapper">
    <div className={styles.content}>
      <section className={styles.leftSide}>
        <h1>Евгений Петрянкин</h1>
        <h2>Веб-разработчик</h2>
        <div className={styles.links}>
          <a
            href="https://github.com/evgeniyPP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
          <a
            href="https://vk.com/fkeromanov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faVk} />
          </a>
          <a
            href="https://t.me/evgeniy_pp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faTelegramPlane} />
          </a>
        </div>
      </section>

      <section className={styles.rightSide}>
        <div className={styles.aboutMe}>
          <h3>Обо мне</h3>
          <div className={styles.aboutMe__content}>
            <p>
              23 года, нахожусь в Москве. Люблю в профессии разработчика чувство
              создания чего-то нового, возможность созерцать красоту огромного
              механизма, который отлаженно работает, несмотря на свою сложность.
            </p>
            <img src={avatar} alt="my avatar" />
          </div>
        </div>

        <div className={styles.navbar}>
          <Link className={styles.navItem} to="/skills">
            Мой стек
          </Link>
          <Link className={styles.navItem} to="/projects">
            Мои проекты
          </Link>
          <Link className={styles.navItem} to="/resume">
            Моё резюме
          </Link>
        </div>
      </section>
    </div>
  </div>
)
