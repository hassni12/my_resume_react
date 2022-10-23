import React, { Component } from "react";
import {Helmet} from 'react-helmet'
// import Portfolio from '../../blocks/Portfolio';

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Hassnain Portfolio </title>
                    <meta name="description" content="" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
