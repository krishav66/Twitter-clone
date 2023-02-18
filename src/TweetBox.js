import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import firebase from './Firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage]= useState("");
  const [tweetImage, setTweetImage]= useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    firebase.firestore().collection('posts').add({
      displayName: 'Kumar Rishav',
      username: 'kumarrishav48',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://pbs.twimg.com/profile_images/1278955640304439296/9JWja5Um_400x400.jpg'
    });
    setTweetMessage(" ");
    setTweetImage(" ");
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
            <Avatar src="https://pbs.twimg.com/profile_images/1278955640304439296/9JWja5Um_400x400.jpg" />
            <input onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} placeholder={"What's happening?"} type= 'text' />
            </div>

            <input value={tweetImage}
                   onChange={(e) => setTweetImage(e.target.value)}
                   className='tweetBox__inputImage' 
                   placeholder='Enter image URL' type="text" />
            

            <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton" fullWidth > Tweet </Button>
        </form>
    </div>   
  );
}

export default TweetBox;