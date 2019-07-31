import React from 'react'
import VideoItem from './VideoItem';

//destructuring
const VideoList = ({ videos, onVideoSelect }) => {
    // props.video
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}  onVideoSelect={onVideoSelect} />
    })

    return <div className='ui relaxed divided list'>{renderedList}</div>
}


export default VideoList;