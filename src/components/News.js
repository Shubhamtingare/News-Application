import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor(){
    super();
    this.state={
      data:null,
      loading: false,
      page:1
    }
  }
     componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33f518f9b00e4e3f87d517620ae30f87&page=1"
        fetch(url).then((res)=>{
            res.json().then((result)=>{
                console.log(result.articles)
                this.setState({data:result.articles})
            })
        })
    }
     handlePrev = ()=>{
        console.log("prev");

    }
     handleNext =()=>{
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33f518f9b00e4e3f87d517620ae30f87&page=2"
        fetch(url).then((res)=>{
            res.json().then((result)=>{
                console.log(result.articles)
                this.setState({data:result.articles})
            })
        })
        this.setState{
            page:this.state.page +1;
            article: parsedData.articles;
        }
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
        {this.state.data &&this.state.data.map((element)=>{
        return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl ={element.url} />
          </div>})}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrev}> &larr; Previous</button>
        <button type="button" className="btn btn-secondary" onClick={this.handleNext}>Next  &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
