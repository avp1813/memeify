import React from 'react'


var imgStyle = {
    'height': '20vh',
    'marginLeft': '2vw',
    'marginRight': '2vw',
    'marginBottom': '2vh',
    'marginTop': '2vh',
    'border': 'solid 1px black'

}
const Meme = ({temp, click}) => {
    
    
    return (
        <>
  <img src={temp.url} key={temp.id} style={imgStyle} onClick={click} alt={temp.name}/>
        </>
    )
}

export default Meme
