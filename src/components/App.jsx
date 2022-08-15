class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.state = {
      videoList: [],
      currentVideo: exampleVideoData[0]
    }
  }

  componentDidMount() {
    this.videoSearch('rickroll');
  }

  videoSearch(query) {
    searchYouTube(query, (videos) => {
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      })
    })
  }

  handleVideoChange(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search method={this.videoSearch.bind(this)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} method={this.handleVideoChange}/>
        </div>
      </div>
    </div>
    )
  };
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
import Search from "./Search.js";
import VideoList from "./VideoList.js";
import VideoListEntry from "./VideoListEntry.js";
import VideoPlayer from "./VideoPlayer.js";
import exampleVideoData from "/src/data/exampleVideoData.js"
import searchYouTube from "../lib/searchYouTube.js"
import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';
ReactDOM.render(<App />, document.getElementById("app"));