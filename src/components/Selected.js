
import React from 'react'
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileDownload, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'

var imgStyle = {
    'height': '50vh',
    'marginLeft': '2vw',
    'marginRight': '2vw',
    'marginBottom': '2vh',
    'marginTop': '2vh',
    'border': 'solid 1px black',
    'float': 'left'

}
const Selected = ({item, dis}) => {
    
    const [boxes, setBox] = useState([])
    const [imgUrl, setURL] = useState(item.url)

    useEffect(() => {
        var temp = []
    for (let index = 0; index < item.box_count; index++) {
        temp.push(index + 1)
        
    }
    setBox(temp)
    }, [])
   


    //Inputs
    function readInput() {
        var inputs = document.getElementById("inputs").querySelectorAll(".meme"); 
        var url = `https://api.imgflip.com/caption_image?username=AjinkyaSonawane&password=dailypy1&template_id=${item.id}`

        inputs.forEach(input => {
            
            url = url + `&boxes[${input.id - 1}][text]=${input.value}`

            
        })
        //Params
        





        fetch(url, { method: 'POST' })
    .then(res => res.json())
    .then(json => {
        try {
        setURL(json['data']['url'])
        } catch(err) {
            console.log(err)
        }
    })

    }

    return (
        <>
        
           
 <FontAwesomeIcon icon={faLongArrowAltLeft} size='3x' style={{marginLeft: '30px'}} onClick={dis}/>
<h2 style={{fontSize: '30px', marginTop: '5px', marginLeft: '30px'}}>{item.name}</h2>
  <img src={imgUrl} style={imgStyle} alt={item.name}/>
  <Form>
      <div id='inputs'>
      {
         boxes.map((id) => (
            <Form.Control type='text' placeholder={'Text ' + id} style={{width:'30vw', marginTop: '20px'}} key={id} onInput={() => {readInput(id)}} className='meme' id={id} autoComplete='off'/>
         ))
      }
      </div>
      
  </Form>
<a href={imgUrl} download="meme.png"><FontAwesomeIcon icon={faFileDownload} style={{height: '10vh', width: '10vw', marginTop: '10vh'}}/></a>
        </>
    )
}

export default Selected
