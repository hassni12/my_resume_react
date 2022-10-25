// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

import DarkMainDemo from "./dark/MainDemo";
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout

import error404 from "./elements/error404";

// Blocks Layout

import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
// ToastContainer
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
// ToastContainer
import { ToastContainer } from 'react-toastify';
import { store } from "./store";
// import { ChakraProvider } from '@chakra-ui/react'

class Root extends Component {
  render() {
    return (
      
              
              <Provider store={store}>
        <BrowserRouter >
          <PageScrollTop>
            <Switch>
             
              <Route
                exact
                path={`/`}
                component={DarkPortfolioLanding}
              />
              <Route
                path={`/404`}
                component={error404}
              />
              <Route component={error404} />
            </Switch>
          </PageScrollTop>
        </BrowserRouter> 
      <ToastContainer/>
      </Provider>
    
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
