
import styles from './../../styles/Footer.module.css'
import { ROUTES } from '../../utils/router'
import {Link} from 'react-router-dom'
import LOGO from '../../images/logo.svg'

const Footer = () => {
  return (
    <section className={styles.footer}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt='Staff'/>
            </Link>
        </div>
        <div className={styles.rights}>
                Developed by {''}
                <a href='https://t.me/evmi52' target='_blank' rel='noreferrer'>Miroslav</a>
            </div>
        <div className={styles.socials}>
                <a href='' target='_blank' rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`./../../../public/sprite.svg#instagram`}></use>
                    </svg>
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`./../../../public/sprite.svg#youtube`}></use>
                    </svg>
                </a>
                <a href='' target='_blank' rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`./../../../public/sprite.svg#facebook`}></use>
                    </svg>
                </a>
            </div>
    </section>
  )
}

export default Footer