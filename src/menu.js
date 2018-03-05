
import React, { Component } from 'react';
import "./menu.css"

export default class Menu extends Component {
    static defaultProps = { items: [] }    

    render() {
        const currentItem = this.props.currentItem;
        return (
            <div id="Menu">                          
                <div id="MenuBody">
                    {this.props.items.map((item, index) => {
                        return (
                            <div key={index} className={currentItem === item ? "Current" : ""}>
                                <span onClick={() => this.props.setCurrentSlide(item)}>{item.title}</span>
                                {currentItem === item ?
                                    <div className="SubMenu">
                                        {item.children.map((subitem, subindex) => <span key={subindex} onClick={() => this.props.setCurrentSlide(subitem)}>{subitem.title}</span>)}
                                    </div> : ""}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
