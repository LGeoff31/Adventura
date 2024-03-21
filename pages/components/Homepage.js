import React from "react";

const Homepage = () => {
  return (
      <>
      <div className="homepage">  
            <img
              className="homepage-img"
              src="main.png"
              alt="group"
              width={200}
              height={400}
              style={{ marginTop: "-6rem", margin: "0 auto" }}
            />
            <h6 className="Sub-title-homepage"> 
                Ready to Start?
            </h6>
          <div className="divbutton">
            <button className="Join--buttons">
              Create Room
            </button>
          </div>

            <h6 className="Sub-title-homepage2">
                Joining an Existing Room?
            </h6>
          <div className="divbutton">
            <input className="input-code "type="text" placeholder="ENTER CODE">
            </input>
          </div>
          <div className="divbutton">
            <button className="Join--buttons">
              Join a Room
            </button>
          </div>
      </div>
      </>
  );
};

export default Homepage;
