import { useState } from "react"

const DescriptionHade = ({view, descriptionData}) => {

   const [data, setData] = useState(null)

    const showDescription = () => {
         setData(descriptionData)
    }

    return(
        <div onClick={showDescription} className="max-w-[814px] bg-gray-300 p-5 rounded-lg mt-3">
            {view}<span> views</span>
            <p>more........{data}</p>
        </div>

    )
}

export default DescriptionHade