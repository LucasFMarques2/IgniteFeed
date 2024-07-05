import style from './Header.module.css'
import logo from '../../assets/headerImg/logo.svg'

export function Header(){
    return(
        <div className={style.header}>
            <img src={logo} alt='Logo do ignaite'/>
            <strong>Ignite Feed</strong>
         </div>
    )
}