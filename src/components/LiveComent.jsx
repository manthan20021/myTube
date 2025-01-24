import React from 'react'

function LiveComent({name , coment}) {
  return (
    <div className='flex items-center mb-5'>
      <img className='h-7 mr-1' src="https://tse4.mm.bing.net/th?id=OIP.9_MptOLxjJEGSGukPt9FWQHaHa&pid=Api&P=0&h=180" alt="user img" />
      <span className='font-semibold text-[14px]   mr-1'>{name}</span>
      <span className='text-[14px]'>:{coment}</span>
    </div>
  )
}

export default LiveComent
