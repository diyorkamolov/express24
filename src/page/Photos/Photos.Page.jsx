import { useEffect, useState } from "react"
import React from 'react'
import Layout from "../../components/layout/layout"
import { Avatar } from "@mui/material"
import { NavLink } from "react-router-dom"

function Photos() {
    const [photos, setPhotos] = useState([])

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => setPhotos(data));
    }, [])

  return (
   <Layout>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            {/* <p>ID: {photo.id}</p> */}
            <NavLink to={`/photos/${photo.id}`}>Title: {photo.title}</NavLink>
                        <Avatar src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        ))}
      </ul>
    </Layout>
    )
    }

export default Photos
