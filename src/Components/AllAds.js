import React, { Component } from 'react';
import allAds from '../data/allAds';
import Ad from './Ad';

class AllAds extends Component{
    render(){
        return(
            <div className="all-ads-cont">
                {allAds.map(ad => <Ad {...ad}/>)}
            </div>
        )
    }
}
export default AllAds;