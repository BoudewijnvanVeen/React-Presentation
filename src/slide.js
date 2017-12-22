
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Carrousel from './carrousel';

export default class Slide extends Component {   
    render() {        
        return (
            <div>
                <div>{this.props.slide.title}</div>
                <div>{this.props.slide.description}</div>
                <div>
                    <Carrousel>
                        {this.props.slide.content.map((content, index) => {
                            return (<div key={index}><ReactMarkdown source={content} /></div>);
                        })}
                    </Carrousel>      
                </div>
                <div>{this.props.slide.sources.map((source) => { return (source.title) })}</div>
                <div>{this.props.id}</div>
            </div>
        );
    }
}
