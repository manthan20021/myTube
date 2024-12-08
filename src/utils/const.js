const YOUTUBE_API_KEY = 'AIzaSyCE9A-kYl7hfCHhAUDw0qteakaD7h6ifeo'

export const YOUTUBE_VIDEO_API = 
'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = 
"http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="
