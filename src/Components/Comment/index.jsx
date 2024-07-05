import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import {Avatar} from '../Elements/Avatar'
import icone from '../../assets/profileImg/icone.jpeg'

export function Comment(){
    return(
        <div className={style.comment}>
             <Avatar hasBorder={false} img={icone}/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.autorAndTime}>
                            <strong>Lucas Freitas</strong>
                            <time title='01 Julho ás 17h' dateTime="2024-05-11 17:35:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir 
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}