import React from "react";

const PublicationItem = (props) => {
  let { title, author,department,type,iswith,month} = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0',
    
          
        }}>  
        </div>
        <div className="card-body">
          <h3 className="card-title">{title} </h3>
          <h5 className="card-text">{department}</h5>
          <p className="card-text">{type}</p>
          <p className="card-text">{iswith}</p>
          <p className="card-text"><small className="text-muted">By {author} in {month}</small></p>
          <a rel='noreferrer' href={'/'} target="_blank" className="btn btn-sm btn-dark">Download</a>
        </div>
      </div>
    </div>
  )
}
export default PublicationItem