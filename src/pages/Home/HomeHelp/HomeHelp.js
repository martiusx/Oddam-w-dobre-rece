import { useState } from "react";
import Heading from "../../../components/ui/Heading";
import Button from "../../../components/ui/Button";
import HomeHelpElement from "./HomeHelpElement";
import { 
    fundations, 
    organizations, 
    local, 
    functionsHeading, 
    localHeading, 
    organizationsHeading
} from './HomeHelpTexts';

const HomeHelp = function() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [posts, setPosts] = useState(fundations);
    const [helpHeading, setHelpHeading] = useState(functionsHeading);
    const [btnActive, setBtnActive] = useState({
        activeObject : null,
        object : [{id: 1}, {id: 2}, {id:3}]
    });
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const toggleActive = function(index) {
        setBtnActive({ ...btnActive, activeObject: btnActive.object[index]})
    };

    const toggleActiveStyles = function(index) {
        if (btnActive.object[index] === btnActive.activeObject) {
            return "active";
        } else {
            return "inactive";
        }
    };

    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <div className="homeHelp" id="homeHelp" >
            <Heading firstText="Komu pomagamy?" />
            <div className="homeHelp__wrapper">
                <Button 
                    text="Fundacjom" 
                    clickHandler={() => {
                        setPosts(fundations); 
                        setHelpHeading(functionsHeading)
                    }}
                />
                <Button 
                    text="Organizacjom pozarządowym" 
                    clickHandler={() => 
                        {
                            setPosts(organizations)
                            setHelpHeading(organizationsHeading)  
                        }} 
                />
                <Button 
                    text="Lokalnym zbiórkom" 
                    clickHandler={() => 
                        {
                            setPosts(local)
                            setHelpHeading(localHeading)
                        }}
                />
            </div>
            <p> {helpHeading} </p>
            <div className="homeHelp__element-wrapper">
                {currentPosts.map((post, index) => (
                    <div key={index} className="test">
                        <HomeHelpElement
                        title={post.title}
                        text={post.text}
                        stuff={post.stuff}
                        />
                    </div>
                ))}
            </div>
            <ul>
                {pageNumbers.map(number => (
                    <li 
                        key={number} 
                        id="homeHelp" 
                        className={toggleActiveStyles(number)}>
                        <a 
                            onClick={() => {
                                paginate(number)
                                toggleActive(number)
                            }} 
                            href="#homeHelp" 
                            key={number}>
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeHelp;