import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card/index';

const RecentPosts = (props) =>{
    return(
        <div style={props.style}>
            <Card style={{marginBottom:'20px'}} >
                <div className="postImageWrapper">
                    <img src={require(`../../../blogPostImages/pic3.webp`)}/>
                </div>
                <div style={{textAlign:'center'}}>
                    <span>Featured</span>
                    <h2>Fitness Mantra To Live Fit Life</h2>
                    <span>posted on July 21,2016 by Sora Blogging Tips</span>
                    <p>Midst first it,you are multiply .Thre don't ,second his one. </p>
                    <button>Read More</button>

                </div>
            </Card>
        </div>

    )
}

export default RecentPosts;