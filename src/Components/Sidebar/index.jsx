import style from './Side.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from '../Elements/Avatar'

import icone from '../../assets/profileImg/icone.jpeg'


export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%22" alt="" />

            <div className={style.profile}>
                <Avatar img={icone}/>
                <strong>Lucas Freitas Marques</strong>
                <span>Front-end Developer</span>
            </div>
            <footer>
                <a href="#"><PencilLine size={20}/>Editar seu perfil</a>
            </footer>
        </aside>
    )
}