
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Carousel from 'nuka-carousel';

export default class Slide extends Component {
    render() {
        return (
            <div>
                <div>{this.props.slide.title}</div>
                <div>{this.props.slide.description}</div>
                <div>
                    <Carousel>
                        {this.props.slide.content.map((content, index) => {
                            return (<div key={index}><ReactMarkdown source={content} /></div>);
                        })}
                    </Carousel>
                </div>
                <div>
                    {this.props.slide.sources.map((source) => {
                        { source.title }
                    })}
                </div>
                <div>{this.props.id}</div>
            </div>
        );
    }
}
