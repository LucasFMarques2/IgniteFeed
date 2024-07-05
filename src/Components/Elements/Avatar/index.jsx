import style from './Avatar.module.css'

// eslint-disable-next-line react/prop-types
export function Avatar({img, hasBorder = true}){
    return(
        <div>
            <img className={hasBorder ? style.avatarWithBorder : style.avatar} 
            src={img} />
        </div>
    )
}