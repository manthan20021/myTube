import { useEffect, useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { IoLogoYoutube } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { togelManu } from '../stores/isManuOpenSlice'
import { YOUTUBE_SEARCH_API } from '../utils/const' 


function Head() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResult] = useState(false)
  
  
  const dispatch = useDispatch()
 
  
  useEffect(() => {
    const timer = setTimeout(() => {
        getSearchData()
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  },[searchQuery]) 

  const getSearchData = async () => {
    const searchData = await fetch( YOUTUBE_SEARCH_API + searchQuery)
    const json = await searchData.text()
    setSearchResults(json) 
    console.log(json);
    
  }

  console.log(searchQuery);


  const handelTogelClick = () => {
    dispatch(togelManu())
  }
  
  return (
    <div className='
    max-w-[1523px]
    min-w-[1523px] 
    flex position: 
    static 
    justify-between 
    px-4 h-14 
    items-center
     '>
        <div className='flex'>
        <FiAlignJustify 
        onClick={() => handelTogelClick()} 
        className='h-7 w-7 cursor-pointer' />
        <IoLogoYoutube className='h-7 w-7 ml-5' />
        <h1 className='font-bold ml-2'>MyTube</h1>
        </div>

        <div className='flex flex-col'>
        <div className=' inputdiv hidden sm:flex'>
            <input 
            className='
            h-10 w-[568px] 
            border-[1px] 
            border-gray-400 
            rounded-l-full pl-3
            ' 
            type="text" 
            placeholder='search'
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
            onFocus={() => {
              setShowResult(true)
            }}
            onBlur={() => {
             setShowResult(false)
            }}
            />
            <button 
            className='
            h-10 border-t-[1px] 
            border-r-[1px] 
            border-b-[1px] 
            border-l-none 
            border-gray-400 
            rounded-r-full px-4
            '>
              <FaSearch />
              </button>
        </div>
        { showResults && <ul className=' 
        bg-[#ffffff] 
        w-[617px] 
        rounded-lg p-5 
        position: fixed 
        mt-11
        '>{
          searchResults.map(results => (
            <li key={results} className='
            font-semibold mb-5 
            text-lg flex 
            items-center 
            h-6 
            cursor-pointer
            '><FaSearch className='
            mr-2 text-gray-500 
            font-thin
            '/>{results}</li>
            
          )) 
          }</ul>}
          </div>

        <div className='flex'>
        <FaBell  className='h-7 w-7'  />
        <FaUserCircle  className='h-7 w-7 ml-3'/> 
        </div>
        </div>
  )
}

export default Head
