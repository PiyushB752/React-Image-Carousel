import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props) {
      super(props)
      this.state = {
        presentImg : 0
      }
    }
    previous_button = () =>{
        this.setState((present)=>({
            presentImg: (present.presentImg - 1 + images.length) % images.length
        }))
    }
    next_button = () =>{
        this.setState((present)=>({
            presentImg: (present.presentImg + 1 ) % images.length
        }))
    }
  render(){
    return(
        <div>
            <div className="gallery" style={{ backgroundImage: `url(${images[this.state.presentImg].img})` }}>
                <div className="previousButton" onClick={this.previous_button}>
                    <ArrowBackIosIcon className="Button" />
                </div>
                <div className="details">
                    <div className="title"><h1> {images[this.state.presentImg].title} </h1></div>
                    <div className="sub"><h4> {images[this.state.presentImg].subtitle} </h4></div>
                </div>
                <div className="nextButton" onClick={this.next_button}>
                    <ArrowForwardIosIcon className="Button"/>
                </div>
            </div>
        </div>
    )
  }
}

export default Carousel;