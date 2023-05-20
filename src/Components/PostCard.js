import './card.css';
import heart from "../Images/heart.png"
import share from "../Images/share.png"
import more_icon from "../Images/more_icon.svg"

const Card = ({user}) => {
    return (
        <div id="box">
            <div className="card-header">
                <div id="name">{user.author}</div>
                <div id="location">{user.location}</div>
                <span><img id='dots' src={more_icon} alt=""/></span>
            </div>
            <img id="image" src={`https://instaclone-node-backend-6llm.onrender.com/images/${user.image}`} alt=""/>
            <div id="images">
                <img id="heart" src={heart} alt=""/>
                <img id='share' src={share} alt=""/>
            </div>
            <div id="description">{user.description}</div>
        </div>
    )
}

export default Card