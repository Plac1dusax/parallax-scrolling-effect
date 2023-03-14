import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import "./App.css"

function App() {
  return (
    <>
      <Parallax
        pages={2}
        style={{
          width: "100vw",
        }}
      >
        <ParallaxLayer
          factor={1.5}
          speed={0.5}
          offset={0}
          style={{ zIndex: "-1" }}
        >
          <img
            src={require("./images/background.png")}
            className="background"
          />
        </ParallaxLayer>
        <ParallaxLayer
          speed={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "-1",
            objectFit: "cover",
          }}
          offset={0}
        >
          <img src={require("./images/f15e.png")} className="foreground" />
        </ParallaxLayer>
        <ParallaxLayer
          speed={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "-1",
            fontSize: "40px",
            color: "white",
            textShadow: "0 0 5px black",
          }}
          offset={0}
        >
          <div className="title-text">F-15E Strike Eagle</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0}
          factor={2}
          sticky={{ start: 1, end: 2 }}
          style={
            {
              // zIndex: "1",
              // display: "flex",
              // justifyContent: "flex-start",
              // alignItems: "center",
              // minWidth: "95vw",
              // fontSize: "24px",
              // color: "white",
              // backgroundColor: "#333",
              // padding: "0.5rem 0.3rem"
            }
          }
        >
          <img src={require("./images/city.png")} className="city" />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

export default App
