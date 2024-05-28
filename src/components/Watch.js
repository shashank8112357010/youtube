import React from 'react'
import { useSearchParams } from 'react-router-dom';


const Watch = () => {
const [searchParams] = useSearchParams();
const videoId=searchParams.get('v');
  return (
    <div>
         <iframe
                        width="900"
                        height="500"
                        src={`https://www.youtube.com/embed/${videoId}?&autoplay=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                    </iframe>
    </div>
  )
}

export default Watch