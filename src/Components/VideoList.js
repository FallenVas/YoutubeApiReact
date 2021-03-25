import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        let itemKey =""
        if (!video.id.videoId) {
            itemKey = video.id.channelId
        }
        else {
            itemKey = video.id.videoId
        }
        return <VideoItem  onVideoSelect={onVideoSelect} video={ video } key={itemKey}/>
    })
    return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList