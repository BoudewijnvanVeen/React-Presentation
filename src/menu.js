
import React, { Component } from 'react';
import "./menu.css"

export default class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                {this.props.items.map((item) => {
                    return (<div key={item.id} className="MenuItem">{item.title}</div>)
                })}
            </div>
        );
    }
}
