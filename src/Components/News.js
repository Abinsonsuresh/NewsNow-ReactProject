import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';



export default function News(props) {

    const[articles, setarticles] = useState([])
    const[loading, setloading] = useState(true)
    const[page, setpage] = useState(1)
    const[totalResults, settotalResults] = useState(0)


       const updatenews = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f9cb9a1868234c8780e38d634b2f7325&page=${page}&pageSize=20`
        setloading(true)
    
        let data = await fetch(url)
        let parseddata = await data.json()
        console.log(parseddata)
        setarticles(parseddata.articles)
        settotalResults(parseddata.totalResults)
        setloading(false)
      }

      useEffect(()=>{
        updatenews()
      }, [])

        const nextClick = async()=>{
            setpage(page+1)
            updatenews()
        }
        const prevClick = async()=>{
            setpage(page-1)
            updatenews()
        }
      


  return (
    <div className="container my-3">
        <h2>NewsNow- Top Headlines</h2>
        {loading && <Spinner/>}
        <div className="row">
        {articles.map((element)=>{
            return    <div className="col-md-3" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,45): ""} description={element.description?element.description.slice(0,88): ""} imgurl={element.urlToImage} newsurl={element.url}/>
          </div>
 
        })}
        <div className='container' >
            <button type='button' className='btn btn-dark mx-3  float-end' onClick={nextClick}> Next &rarr;</button>
            <button type='button' disabled={page<=1} className='btn btn-dark mx-3  float-end' onClick={prevClick}> &larr; Previous</button>
        </div>
        {/* 
        <div className='container d-flex justify-content-between' >
            <button type='button' className='btn btn-dark '>Previous</button>
            <button type='button' className='btn btn-dark '>Next</button>

        </div>
        */}

        </div>
      </div>
  )
}
