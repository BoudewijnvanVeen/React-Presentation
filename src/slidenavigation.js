import React, {Component} from 'react';

export default class SlideNavigation extends Component {
  constructor(props) {
    super(props);       
    
    this.setCurrentSlide = this.setCurrentSlide.bind(this);          
  }    

  setCurrentSlide(slide) {
    this.props.setCurrentSlide(slide);
  } 

  render() { 
    const currentIndex = (this.props.currentSlide !== undefined)?this.props.slides.findIndex(s => s.url === this.props.currentSlide.url):0;    
    const nextSlide = this.props.slides[currentIndex + 1];
    const prevSlide = this.props.slides[currentIndex - 1]

    return (    
      <div>
        <button onClick={() => this.setCurrentSlide(prevSlide)} disabled={prevSlide === undefined}>        
          Prev        
        </button> 
        <button onClick={() => this.setCurrentSlide(nextSlide)} disabled={nextSlide === undefined}>        
          Next        
        </button>
      </div>
    );
  }
}
