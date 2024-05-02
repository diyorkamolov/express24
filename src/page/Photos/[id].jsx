import { useEffect, useState } from "react"
import React from 'react'
import Layout from "../../components/layout/layout"
import { useParams } from "react-router-dom"

function PhotosById() {
    const {id}  = useParams();
    const [photos, setPhotos] = useState([])

    useEffect (() => {
        fetch( `https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => setPhotos(data));
    }, [])

  return (
   <Layout>
    {id}
    {photos && <h1>{photos.title}</h1>}
    
   
    </Layout>
    )
    }

export default PhotosById
