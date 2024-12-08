
function VideoCard({info}) {
  
  return (
    <div className='w-[399px] h-[342px] ml-6'>
        <img 
        className='
        w-full 
        rounded-lg
        ' 
        src={info?.snippet?.thumbnails?.medium?.url} 
        alt="thumbnail"
        />
        <h3 className='font-bold'>
          {info?.snippet?.title}
          </h3>
        <p>
          {info?.snippet?.channelTitle}
          </p>
        <p>
          {info?.statistics?.viewCount} views
          </p>
        
    </div>
  )
}

export default VideoCard
