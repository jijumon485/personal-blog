import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require("../../../blogPostImages/marmala.jpeg")} alt="" />
            </div>

            <div className="details" style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Marmala Waterfalls</h2>
                <span>posted on May 21, 2020 b</span>
                <p>Located at a distance of few kms from Erattupetta in Kottayam inside a private rubber estate, Marmala Waterfalls are popularly known as the ‘enchantress of the jungle’. Plummeting from a height of 200 feet, the unblemished clear waters create an aura of mist around them. The tantalising waterfalls splash into a 12 feet pond and run down to join the river Teekoy. Replete with timber trees on the green-carpeted mountains, the clear cascading waters offer a sight like no other. Slightly veiled amidst thick bushes and blue hills, the location can only be reach.....</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts