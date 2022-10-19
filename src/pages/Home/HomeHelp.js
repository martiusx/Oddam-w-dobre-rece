import { useEffect, useState } from "react";
import Heading from "../../components/ui/Heading";
import Button from "../../components/ui/Button";



const HomeHelp = function() {
    const [posts, setPosts] = useState([
        // {
        //     name: "select1",
            // heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
            // elements: [
                {
                    title: "Zbiórka “Lorem Ipsum 1”",
                    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                },
                {
                    title: "Zbiórka “Lorem Ipsum 2”",
                    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                },
                {
                    title: "Zbiórka “Lorem Ipsum 3”",
                    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                },
                {
                    title: "Zbiórka “Lorem Ipsum 4”",
                    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",         
                },
                {
                    title: "Zbiórka “Lorem Ipsum 5”",
                    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                },
                {
                    title: "Zbiórka “Lorem Ipsum 6”",
                    text: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                }
        //     ]
        // },
        // // {
        //     // name: "select2",
        //     // heading: "Lorem d dolor sit amet, f adipiscing elit, sed do f tempor f ut f et f f aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        //     // elements: [
        //         {
        //             title: "Zbiórka “Lorem Ipsum 1”",
        //             text: "Quis varius quam f id diam vel quam f pulvinar.",
        //         },
        //         {
        //             title: "Zbiórka “Lorem Ipsum 2”",
        //             text: "Quis varius quam quisque id diam vel quam f pulvinar.",
        //         },
        //         {
        //             title: "Zbiórka “Lorem Ipsum 3”",
        //             text: "Quis varius quam quisque id diam vel quam f pulvinar.",
        //         },
        //         {
        //             title: "Zbiórka “Lorem Ipsum 4”",
        //             text: "Quis varius quam quisque id diam vel quam f pulvinar.",
        //         }
        //     ]
        // // }
    ]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    //pagination
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
       
        <div className="homeHelp" >
            <Heading firstText="Komu pomagamy?" />
            <div className="homeHelp__wrapper">
                <Button text="Fundacjom" />
                <Button text="Organizacjom pozarządowym" />
                <Button text="Lokalnym zbiórkom" />
            </div>
            {currentPosts.map((post, index) => (
                <div key={index}>
                    <p >{post.heading}</p>
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

const HomeHelpElement = function(props) {
    return (
        <div className="homeHelp__element">
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}


export default HomeHelp;