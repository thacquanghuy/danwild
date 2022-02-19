import Content from '../components/IndexPage'
import styles from './app.module.scss'

export default function Home() {
  return (
    <div className={styles['app-container']}>
      <Content />
    </div>
  )
}
