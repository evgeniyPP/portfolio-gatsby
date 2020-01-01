import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/projects.module.less'

export default () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            name
            slug
            shortDescription
            technologies
            githubLink
            siteLink
            photo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  const projects = query.allContentfulProject.edges.map(edge => {
    const {
      name,
      slug,
      shortDescription,
      technologies,
      githubLink,
      siteLink,
      photo
    } = edge.node
    return (
      <li className={styles.project} key={slug}>
        <div className={styles.project__text}>
          <Link to={`/projects/${slug}`}>
            <h2 className={styles.project__title}>{name}</h2>
            <p className={styles.project__shortDesc}>{shortDescription}</p>
            <p>{technologies}</p>
          </Link>
          <div className={styles.links}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              Сайт
            </a>
          </div>
        </div>
        <Link className={styles.project__image} to={`/projects/${slug}`}>
          <img src={photo.file.url} alt={slug} />
        </Link>
      </li>
    )
  })

  return (
    <div className="wrapper">
      <div className={styles.content}>
        <Link to="/" className={styles.title}>
          <FontAwesomeIcon className={styles.icon} icon={faCaretLeft} />
          <h1>Мои проекты</h1>
        </Link>
        <ul className={styles.projects}>{projects}</ul>
      </div>
    </div>
  )
}
