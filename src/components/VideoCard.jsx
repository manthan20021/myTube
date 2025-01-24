
function VideoCard({info}) {
  
  return (
    <div className='sm:w-[299px] sm:h-[242px] w-full h-auto ml-6'>
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
