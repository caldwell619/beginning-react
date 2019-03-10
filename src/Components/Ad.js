import React, { Component } from 'react';

class Ad extends Component{
    render(){
        console.log(this.props)
        return(
            <div className="ad-cont">
                <div className="title-cont">
                    {this.props.title}
                </div>
                <div className="price-cont">
                {this.props.price}
                </div>
                <div className="description-cont">
                    {this.props.description}
                </div>
                <div className="owner-cont">
                    {this.props.owner}
                </div>
                <div className="category-cont">
                    {this.props.category} 
                </div>
            </div>
        )
    }
}
export default Ad;