import React from 'react'

const NewsItem = (props) => {
  let { photo, title, body, link,color,theme } = props;
  let text = "While it is hoped Pat Cummins will return for the Test in Indore beginning March 1 there is uncertainty over the situation"
  return (
    <>
      <div className={`card text-${color} bg-${theme}`} style={{ width: "18rem" }}>
        <img src={!photo ? "https://img.etimg.com/thumb/msid-99767560,width-1070,height-580,imgsize-605584,overlay-etmarkets/photo.jpg" : photo} style={{height: "20vh"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{!title ? text.slice(0,36) : title.slice(0, 36)}...</h5>
          <p className="card-text">{!body ? text.slice(0,52) : body.slice(0, 52)}...</p>
          <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary">read more</a>
        </div>
      </div>
    </>
  )
}

export default NewsItem

/* to do this in website */

// 1. here sometimes we body is null on that time we will go with content section which in in api's our point is to 
// if body is null then we go for the content section if content is also null then we go for the demmy text which have been written here 
// must do this with turnary operator