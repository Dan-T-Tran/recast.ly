class VideoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="video-list">
    {this.props.videos.map(video => {
      return <VideoListEntry video={video} method={this.props.method} key={video.etag}/>
    })}
  </div>
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
import VideoListEntry from "./VideoListEntry.js";
