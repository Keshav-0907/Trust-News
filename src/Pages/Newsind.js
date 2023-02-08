import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Page.css'

const Newsind = () => {

    const[Data, setData]= useState("");

    const newsfetch = async () => {
        await axios.get(
            "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b9e3a15f53aa4197b715731f652966b4"
        ).then((res)=>setData(res.data.articles))
    }

    useEffect(()=> {
        newsfetch();
    })
  return (
    <div className='main'>
        <h2 className='head'> Business News </h2>
            
                {Data ? Data.map((items, index)=>
                <>
                    <div className='container'> 
                        <h5 className='title'>{items.title}</h5>
                        <p> By {items.author}</p>
                        <div className='cont-2'>
                            <img className='img' src={items.urlToImage} alt='err' width='300px' height='210px' ></img>
                            <p className='description'> {items.description}</p>
                        </div>
                        <button><a  className='btn' href={items.url} target="_blank" rel="noreferrer">Read More</a> </button>
                        
                    </div>
                </>
                ) : "Loading" }
           
    </div>
  )
}

export default Newsind