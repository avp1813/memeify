
import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Selected from './components/Selected'

const fetchURL = "https://api.imgflip.com/get_memes";
const getTemplates = () => fetch(fetchURL).then(res => res.json());



const App = () => {

  const [templates, setTemp] = useState([])
  const [selected, setSelected] = useState()
    
  useEffect(() => {
    getTemplates().then(data => setTemp(data['data']['memes']))
  }, []);

  const newMeme = (item)  => {
    setSelected(item)
  }
  const disable = () => {
    setSelected(null)
  }
 
  return (
    <div>
      <Header/>
      {selected ? <Selected item={selected} dis={() => {disable()}}/> :
       <Row>
      {templates.map((item) => (
        <Meme temp={item} key={item.id} click={() => {newMeme(item)}}/>
        
      ))}
      </Row>
}
    </div>
  )
  
}

export default App
