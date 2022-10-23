import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/dark-portfolio-landing#about">User experience design <span> - UI/UX</span></a>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <a href="/dark-portfolio-landing#about">Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, Mern Developer, React Js, Express Js, Node Js, MongoDB, SQL
                                                </li>
                                                <li>
                                                    <a href="/dark-portfolio-landing#about">Interaction design <span> - Animation</span></a>
                                                    I like to move it move it.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/dark-portfolio-landing#about">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/dark-portfolio-landing#about">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/dark-portfolio-landing#about">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/dark-portfolio-landing#about">Mern Developer<span> - Freelancer</span></a> 2021 - Current
                                               </li>
                                               {/* <li>
                                                   <a href="/service">Front-end Engineer<span> - Microsoft</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li> */}
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/dark-portfolio-landing#about">Inter <span> - Degree collage Larkana, Pak</span></a> 2019
                                               </li>
                                               <li>
                                                   <a href="/dark-portfolio-landing#about">BSc In Computer Science<span> - NED University Karachi, Pak</span></a> 2019 - current 
                                               </li>
                                                                   {/* <li>
                                                   <a href="/service">Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
                                               </li> */}
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;