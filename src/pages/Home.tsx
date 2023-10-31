import React from "react";
import "./Home.css";
// import instagram from "../assets/instagram-logo.png";

interface HomePageProps {
    
}

const Home: React.FunctionComponent<HomePageProps> = (props) => {
    return(
        <>
            <div style={{
                margin: "3vw 12vw",
                padding: "2vw 6vw",
                // backgroundColor: "blue",
                color: "white",
                textAlign: "left",
            }}>
                <p className="home-title">
                    Hello there, 👋🏻 <br/>
                    I'm Looi Wei En.
                </p>
                <p className="home-content">
                    I am an aspiring Software Engineering Student from University Sains Malaysia, currently pursuing my goals to be a fullstack developer and starting my journey from frontend development.
                    <br/> <br/>
                </p>
                <div className="home-content"
                style={{
                    padding: "12px",
                    textAlign: "center", 
                    borderRadius:"8px", 
                    backgroundColor:"rgba(255,255,255,0.3)", 
                }}>
                    <p style={{fontSize:"16px", fontWeight:"600"}}>
                        Follow me at
                    </p>
                    <div style={{
                        padding: "16px 0px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "6px",
                    }}>
                        <a href="https://github.com/diminecjean">
                            <img style={{height: "50px"}} src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png" alt="email" />
                        </a>
                        <a href="https://www.facebook.com/weien.looi/">
                            <img style={{height: "50px"}} src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png" alt="email" />
                        </a>
                        <a href="https://www.instagram.com/diminecjean2002/">
                            <img style={{height: "50px"}} src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png" alt="email" />
                        </a>
                        <a href="mailto:looi.weien02@gmail.com">
                            <img style={{height: "50px"}} src="https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png" alt="email" />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{
                padding: "1vw",
                // backgroundColor: "blue",
                color: "white",
                textAlign: "center",
            }}>
                <p style={{fontSize:"200px"}}> 🚧<br/></p>
                <p className="home-content" style={{fontWeight:"600", fontSize:"30px"}}>Under Construction</p>

            </div>
        </>
    )
}

export default Home;