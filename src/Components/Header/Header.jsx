
import styles from './../../styles/Header.module.css'
import {ROUTES} from '../../utils/router'
import { Link } from 'react-router-dom'
import LOGO from '../../images/logo.svg'
import AVATAR from '../../images/avatar.jpg'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="Staff"/>
            </Link>
        </div>
        <div className={styles.info}>
            <div className={styles.user}>
                <div className={styles.avatar} style={{backgroundImage: `url(${AVATAR})`}}/>
                <div className={styles.username}>Guest</div>
            </div>
            <form className={styles.form}>
                <div className={styles.icon}>
                    <svg className='icon'>
                        <use xlinkHref={`./../../../public/sprite.svg#search`}></use>
                    </svg>
                </div>
                <div className={styles.input}>
                    <input type='search' name='search' placeholder='Введите текст' value='' onChange={() => {}} autoComplete='off'/>
                </div>
            </form>
            <div className={styles.account}>
                <Link to={ROUTES.HOME} className={styles.favourites}>
                    <svg className={styles['icon-fav']}>
                        <use xlinkHref={`./../../../public/sprite.svg#heart`}></use>
                    </svg>
                </Link>
                <Link to={ROUTES.CARD} className={styles.cart}>
                    <svg className={styles['icon-cart']}>
                        <use xlinkHref={`./../../../public/sprite.svg#bag`}></use>
                    </svg>
                    <span className={styles.count}>2</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header