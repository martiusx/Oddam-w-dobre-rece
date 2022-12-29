import facebookIcon from './assets/Facebook.png'
import instagramIcon from './assets/Instagram.png'
const HomeFooter = function() {
    return (
        <div className="homeFooter">
            <img src={facebookIcon} alt="facebook"></img>
            <img src={instagramIcon} alt="instagram"></img>
        </div>
    )
}

export default HomeFooter;