import { useState } from 'react'
import './App.css'
import Previous from './Components/Previous'
import Ban from './Components/Ban'
import ContentMain from './Components/ContentMain'



function App() {
  const [content, setContent] = useState(null)
  const [information, setInformation] = useState([])

  const fetchRandomContent = async () => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1`, {headers: {'x-api-key': "live_JuUix1uocBqFYoCISaVGkWKlRsn4o9xj60sB8LifG5VT5sLRGie8dhOvbLWr3Pa5"}})
      console.log(response)
      const json = await response.json()
      setContent(json[0])
      console.log(content)
      if(content.breeds[0] != null){
        setInformation(content.breeds)
        console.log(information)
      } else {
        const defaultInfo = [{
          "alt_names":"Name",
          "life_span":"0-5",
          "origin": "Country",
          "weight": {"metric":"0-1"},
          "name":"Breed"

        }]
        setInformation(defaultInfo)
        console.log(information)
      }
  
    } catch(error) {
      console.error("Error fetching content:", error);
    }
  }
  
  

  return (
    <div className='container'>
      <ContentMain
        content={content}
        onSubmit={fetchRandomContent}
        information={information}
      />
    </div>
   
  )
}
export default App
