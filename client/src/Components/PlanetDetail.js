import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MemoForm from './MemoForm';
import MemoCard from './MemoCard';
import axios from 'axios';

function PlanetDetail({ user }) {

  const [planet, setPlanet] = useState([])
  const { id } = useParams();
  const [memo, setMemo] = useState([])
  const [iframeid, setIframeid] = useState("")
  

  useEffect(() => {
    console.log(id)
    fetch(`/planets/${id}`)
      //change to each planet ID
      .then((r) => r.json())
      .then((data) => {
        setPlanet(data)

        switch (data.name) {
          case "Mercury":
            setIframeid(2369)
            break
          case "Venus":
            setIframeid(2343)
            break
          case "Earth":
            setIframeid(2392)
            break
          case "Mars":
            setIframeid(2372)
            break
          case "Jupiter":
            setIframeid(2375)
            break
          case "Saturn":
            setIframeid(2355)
            break
          case "Uranus":
            setIframeid(2344)
            break
          case "Neptune":
            setIframeid(2364)
            break
        }
      })
    fetchData()
  }, [id])

  async function fetchData() {
    axios.get('/notes')
      .then(r => setMemo(r.data.filter(note => note.planet_id == id))


      )
  }

  const { name, about, info, fact, image, imagetwo, imagethree, imagefour } = planet

  console.log(iframeid)


  return (
    <div className='detail-background'>
      <div className='planet-name'>
        <h1>{name}</h1>
      </div>
      <div className="overview">
      {/* <h1 style={{ color: 'white' }}>Overview</h1> */}
      <h1>Overview</h1>
     <h3 className='font-color'>{about}</h3>
     </div>
     <div className="iframe">
      <iframe
        src={`https://solarsystem.nasa.gov/gltf_embed/${iframeid}`}
        // width='50%'
        // height='600px'
        width="100%"
        height="500px"

        frameborder='0'
      />
      </div>
      {/* <h2 style={{ color: 'white' }}>In Depth</h2> */}
      <h2>In Depth</h2>
      <h3 className='font-color'>{info}</h3>
     <div className="planet-images">
      <img src={image} />
      <img src={imagetwo} />
      </div>

      {/* <h2 style={{ color: 'white' }}>Size - Orbit - Rotation</h2> */}
      <h2>Size - Orbit - Rotation</h2>
      <h3 className='font-color'>{fact}</h3>
      <div className="planet-images">
      <img src={imagethree} />
      <img src={imagefour} />
      </div>

      <div>
        <h2>Notes</h2>
      </div>
     <div className="note-form">
      <MemoForm user={user} planet={planet} />
      {memo.map((m) => {
        return (<MemoCard
          memo={m}
          key={m.id}

        />)
      })}
      </div>

    </div>
  )
}

export default PlanetDetail