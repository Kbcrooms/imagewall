import React,{useState} from 'react'

function Tile(props){
  return(
    <img src={props.src}/>
  )
}
function ImageTiles(props){
  const [numImages,setNumImages] = useState(24)
  const images = Array(numImages).fill('https://picsum.photos/300')
  return(
    <div>
      {
        images.map((image,i)=>{
          return(
            <Tile src={`${image}?random=${i}`}/>
          )
        })
      }
    </div>
  )
}
export default ImageTiles
