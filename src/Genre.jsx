import React, { useEffect, useState } from 'react'
import ButtonKit from './uikit/ButtonKit'
const Ganre = () => {

    const [genres,setGenres]=useState([])



    useEffect(()=>{
        fetch('http://web-tas.net/shop/genru.php')
               .then((response)=>{
                   return response.json()
               }).then(json =>{
                   setGenres(json.results.genre)
               })
    },[])   

    return(
        <>
            {
                 genres.map(genre=>{
                    return <ButtonKit label={genre.name} onClick={()=>console.log(genre.name)} key={genre.code}/>
                 })
            }
        </>
    )
}

export default Ganre