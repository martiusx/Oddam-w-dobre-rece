import { useState } from "react";
import Heading from "../../../components/ui/Heading";
import Button from "../../../components/ui/Button";
import HomeHelpElement from "./HomeHelpElement";
import {fundations, organizations, local, functionsHeading, localHeading, organizationsHeading} from './HomeHelpTexts';

const HomeHelp = function() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const [posts, setPosts] = useState(fundations);
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const [helpHeading, setHelpHeading] = useState(functionsHeading);
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="homeHelp" >
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
            {currentPosts.map((post, index) => (
                <div key={index}>
                    <HomeHelpElement
                    title={post.title}
                    text={post.text}
                    />
                </div>
            ))}
            
            <ul>
                {pageNumbers.map(number => (
                    <li key={number} id="homeHelp">
                        <a onClick={() => paginate(number)} href="#homeHelp" key={number}>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}




export default HomeHelp;