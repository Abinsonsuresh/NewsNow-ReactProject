import React from 'react'

function Newsitem(props) {
  return (
    <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.imgurl ? props.imgurl:"https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202305/tialakvarma-sixteen_nine.jpg?VersionId=mLEnARZR0_GqzPaVcMvQXaEMk8JJOXZF"}
            className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <a  rel="noreferrer" href={props.newsurl} target="_blank" className="btn btn-sm btn-primary">ReadMore</a>
          </div>
        </div>
      </div>
  )
}

export default Newsitem