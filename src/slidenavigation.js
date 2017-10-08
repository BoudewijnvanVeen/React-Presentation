import React, {Component} from 'react';

export default class SlideNavigation extends Component {
  constructor(props) {
    super(props);       
    this.handleClick = this.handleClick.bind(this);        
  }

  handleClick(e) {  
    this.props.gotoNextSlide(this.props.currentslide);    
  } 

  render() { 
    return (      
      <div onClick={this.handleClick}>        
        Next        
      </div>
    );
  }
}
