import { useState } from "react";

export function TwitterFollowCard({userName, children, src}) {
    const [isFollowing, setItsFollowing] = useState(false);


    const buttonClassName = isFollowing
    ? "tw-followCard-followBtn following"
    : "tw-followCard-followBtn"

    const handleClick = () => {setItsFollowing(!isFollowing)}

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className='tw-followCard-avatar'
                    alt="El gato feo de rodrigo" 
                    src={src} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {isFollowing ? "Siguiendo" : "Seguir"}
                </button>
            </aside>
        </article>
    )
}