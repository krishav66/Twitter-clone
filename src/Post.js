import React, {forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post= forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {

  return (
    <div className="post" ref={ref}> 
    <div className="post__avatar">
    <Avatar src={avatar} />
    </div>
    <div className="post__body">
        <div className="post__header">
            <div className="post__headerText">
                <h3>
                    {displayName} {" "} 
                    <span className='post__headerSpecial'>
                      {verified && <VerifiedOutlinedIcon className="post__badge" />} @{username}
                    </span>
                </h3>
                </div>
                <div className="post__headerDescription">
                    <p> {text} </p>
                </div>
                <img src={image} alt=" " />
            </div>
            <div className="post__footer">
                <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                <RepeatOutlinedIcon fontSize="small" />
                <FavoriteBorderOutlinedIcon fontSize="small" />
                <ShareOutlinedIcon fontSize="small" />
            </div>
        </div>

    </div>
    

  );
});

export default Post;