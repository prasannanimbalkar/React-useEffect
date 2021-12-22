import React, {useState, useEffect} from 'react'

export default function Window() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    const handleResize = () => { 
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        //return function removes the saved data from the event listener
        return () => {
          window.removeEventListener('resize', handleResize)
        }, [] 
    })

    return (<> 
        <div> 
            Window Size {windowWidth}
        </div>
    </>)
}