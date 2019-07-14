import React from "react";
import './Loading.css'
const Loading =() =>{
    return(
        <div className="lds-css ng-scope">
            <div className="lds-flickr w-50 h-50"><div></div><div></div><div></div></div>
       </div>
    )
}
export default Loading;