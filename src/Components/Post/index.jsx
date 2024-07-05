import style from './Post.module.css'
import {Avatar} from '../Elements/Avatar/'
import icone from '../../assets/profileImg/icone.jpeg'
import { Comment } from '../Comment'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                <Avatar  img={icone}/>
                    <div className={style.authorInfo}>
                        <strong>Lucas Freitas</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>
                <time title="11 de maio de 2023" dateTime="28-06-2024">Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala pessoal 👋</p>

                <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>

                <p>Acesse e deixe seu feedback 👉 <a href="#">devonlane.design</a></p>

                <p><a href="#">#uiux </a><a href="#">#userexperience</a></p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea placeholder='Deixe seu comentário'/>
                <footer>
                     <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}