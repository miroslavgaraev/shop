
import styles from './../../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
        <div className={styles.title}>Categories</div>
        <nav>
            <ul className={styles.menu}></ul>
        </nav>
        <div className={styles.footer}>
            <a href='/help' target='_blank' className={styles.link}>Help</a>
            <a href='/terms' target='_blank' className={styles.link} style={{textDecoration:'underline'}}>Terms & Conditions</a>
        </div>
    </section>
  )
}

export default SideBar