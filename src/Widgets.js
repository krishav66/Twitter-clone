import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Widgets() {
  return (
    <>
    <div className="widgets">
      
      <div className="widgets__input">
        <SearchOutlinedIcon className="widgets__searchIcon" />
        <input placeholder='Search Twitter' type=" text" />
        </div>
        
        <div className="widgets__widgetsContainer">
          <h2> What's Happening </h2>
          <TwitterTweetEmbed tweetId='1612344566027542528' />
          <TwitterTimelineEmbed sourceType='profile'
                                screenName='kumarrishav48'
                                options={{height:400}} />
          <TwitterShareButton url='https://twitter.com/kumarrishav48'
                              options={{text: 'Hire Me - Lets accomplish our goal'}} />
          
        </div>
    </div>
    </>
  )
}

export default Widgets