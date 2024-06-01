import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    let {title , description ,imageUrl , newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://image.cnbcfm.com/api/v1/image/106562620-1591155182841gettyimages-1224302806.jpeg?v=1690864326&w=1920&h=1080"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer" >Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
