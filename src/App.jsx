import { Header } from './Components/Header'
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar'

import './global.css'
import style from './App.module.css'

export function App() {
   return(
    <div >
       <Header/>

       <div className={style.wrapper}>
         <Sidebar/>
         <main>
            <Post autor="Lucas" content='lorem implsonsad oasdk aksd kasd aksd'/>
            <Post autor="Gabriel" content='lorem implsonsad oasdk aksd kasd aksd'/>
         </main>
       </div>
    </div>
   )
}
