import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './components/apis/youtube';
import VideoList from './components/VideoList';
import { VideoDetail } from './components/VideoItem'


class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }


  //create defaukt search
componentDidMount() {
  this.onTextSubmit('beyonce') //default search setting 
}


//from searcgv=bar component
  onTextSubmit = async text => {
    console.log(text)
    const res = await youtube.get('/search', {
      params: {
        q: text
      }
    });

    // res.data.items name in array of objects
    this.setState({
      
      videos: res.data.items,
      selectedVideo: res.data.items[0] //use first video as default video
    })
  }


  onVideoSelect = video => {
    console.log('from the app', video)
    this.setState({ selectedVideo: video})
  }

//created margin on sides
//pulling in on submit from searchbar as a prop and calling onText Submit 
render() {
  return(
    <div className='ui container'> 
      <SearchBar onSubmit={this.onTextSubmit} />
      {/* I have {this.state.videos.length} videos. */}
      {/* passing in video array created earlier */}
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
      <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className='five wide column'>
      <VideoList 
      onVideoSelect={this.onVideoSelect}  
      videos={this.state.videos} 
      />
          </div>
        </div>
      </div>
    </div>
  )
}
}



export default App;
