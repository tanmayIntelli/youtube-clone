import React from 'react'

const Shimmer = () => {
  return (
        <div className="shimmer-video-card-parent">
          <div>
            <div className="shimmer-thumbnail">
              <p style={{color:"black",fontWeight:"bold"}}>Loading...</p>
            </div>
          </div>
          <div>
            <p id="shimmer-video-title"></p>
            <p id="shimmer-channel-title"> </p>
          
          </div>
        </div>
      );
  
}

export default Shimmer