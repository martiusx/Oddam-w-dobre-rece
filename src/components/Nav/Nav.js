import NavLogin from "./NavLogin/NavLogin";
import NavSection from "./NavSection/NavSection";
const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <NavLogin />
            </div>
            <div className="nav__wrapper">
                <NavSection></NavSection>
            </div>
        </nav>
    )
}

export default Nav;