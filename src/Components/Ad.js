import React, { Component } from 'react';

class Ad extends Component{
    render(){
        const sayWazup = greeting => `Wazzzzzuppppp ${greeting}`;
        return(
            <div className="ad-cont">
                <div className="title-cont">
                    title
                </div>
                <div className="price-cont">
                    price
                </div>
                <div className="description-cont">
                    description
                </div>
                <div className="owner-cont">
                    owner
                </div>
                <div className="category-cont">
                    category                
                </div>
            </div>
        )
    }
}
export default Ad;