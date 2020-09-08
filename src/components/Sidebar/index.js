import React,{useEffect} from 'react';
import './style.css';
import Card from '../UI/Card/index';
import { useState } from 'react';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';


const Sidebar=(props)=>{
    const[posts,setPosts] = useState([]);


    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);

    },[posts]);

    

    return(
        <div className="sidebarContainer" style={{
            width:props.width
        }}>
            <Card style={{marginBottom:"20px",padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileimageContainer">
                    <img src={require('../../blogPostImages/pic2.webp')} alt=""/>
                </div>
                <div className="cardBody">
                    <p className="personalBio">Scientists' research has revealed that viruses are by far the most abundant life forms on Earth.
                         There are a million times more viruses on the planet than stars in the universe. 
                         Viruses also harbor the majority of genetic diversity on Earth.
                    </p>

                </div>
             

            </Card>

            <Card style={{marginBottom:"20px",padding:'20px',boxSizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card>
                <div classname="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">
                    {
                        posts.map((post) => {
                           return(
                               <NavLink key={post.id} to={`/post/${post.slug}`}>
                                   <div className="recentPost">
                                    <h3 >{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                               </NavLink>
                            
                       );
                       })
                    }
                    
                

                    



                </div>

            </Card>
        </div>
    )
};

export default Sidebar;
