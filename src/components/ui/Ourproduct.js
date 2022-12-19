import React from 'react';

import { useState } from "react";
import Tabwishkey from './Tabwishkey';
import Tabbeer from './Tabbeer';
import Tabwine from './Tabwine';
import Tabrum from './Tabrum';
import Tabsnacks from './Tabsnacks';





function  Tabs() {
const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    
  };
    
  return (
  <div className='Ourproduct'>
    <div className="container">
      <div className='row'>
        <div className='col-md-8'>
                <div className='Ophead' >
                    <h1>Our Products</h1>
                    <p>The best selection of your choice| <a href=" "><span>View all <i class="fa-solid fa-chevron-right"></i></span></a></p>
                </div>
        </div>        
        <div className='col-md-4'>
            <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >Wishkey</button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >Beer</button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Wine</button>
                <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Rum</button>
                <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>Snacks</button>            </div>
        </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                  <Tabwishkey/>
                </div>

                <div className={toggleState === 2 ? "content active-content " : "content"}>
                  <Tabbeer/>
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                  <Tabwine/>
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                  <Tabrum/>
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                  <Tabsnacks/>
                </div>
      
            </div> 

        </div>   

      

    </div>

</div>    
  )
}
  
export default Tabs;