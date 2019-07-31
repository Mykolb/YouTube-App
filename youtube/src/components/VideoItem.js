import React from 'react'
import './VideoItem.css'
import './VideoDetail.css'

//when you want to communicate child to parent you need a callback see onClick on line 8

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <div className='video-item' onClick={() => onVideoSelect(video) }>
        <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <div className='content'>
        <h4 className='header'>{video.snippet.title}</h4>
        </div>
        </div>
    )
}


export default VideoItem;




export const VideoDetail = ({ video }) => {
if(!video) {
    return <div className='ui loading basic segment'></div>
}


const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <>
         <div className='ui embed'>
            <iframe src={videoSrc} title='video player' />
        </div>

        <div className= 'ui segment'>
            <h4 className='ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
        </>
    )
}

