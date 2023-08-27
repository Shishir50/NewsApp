import React from "react";



const Newsitems = (props)=> {
  
    let { title, description, imageurl, newsurl, author, date , source } = props;
    return (
      <div>
        <div className="card my-3">
          <span
            className="badge rounded-pill bg-danger"
            style={{display: 'flex',justifyContent:'flex-end',position: 'absolute',right: '0'}}
          >
            {source}
          </span>
          <img
            src={!imageurl? "https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-vxwjsrv6w-1686321378548.jpg?quality=75&strip=all&1686307971&w=1024": imageurl }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="blank" className="btn btn-sm btn-info">
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default Newsitems;
