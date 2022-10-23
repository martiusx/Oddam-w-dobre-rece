import facebookIcon from './assets/Facebook.png'
import instagramIcon from './assets/Instagram.png'
const HomeFooter = function() {
    return (
        <div className="homeFooter">
            <img src={facebookIcon}></img>
            <img src={instagramIcon}></img>
        </div>
    )
}

export default HomeFooter;