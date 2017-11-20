import React from 'react'
import ReactDOM from 'react-dom'
import Searchbar from './components/Searchbar'
import YTSearch from 'youtube-api-search'
import Videolist from './components/videolist'
import Player from './components/player'

const APIkey = "AIzaSyD6480rX6WRzSpRLo2pa3lyuRcZfu1yMlQ";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      clickedVideo: null
    };
    this.onclickvideo = this.onclickvideo.bind(this);
    this.searchvideo = this.searchvideo.bind(this);
    this.searchvideo('edsheeran');
  }

  onclickvideo = (temp) => {
    this.setState(prevState => ({clickedVideo: temp}));
  }

  searchvideo = (uservideo) => {
    YTSearch({key: APIkey, term: uservideo}, (data) => {
      this.setState({
        videos: data,
        clickedVideo: data[0]
      });
    });
  }

  render(){
    return(
      <div>
        <Searchbar searchvideo = {this.searchvideo}/>
        <Player video={this.state.clickedVideo}/>
        <Videolist onclickvideo={this.onclickvideo} list1 = {this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('app'));
