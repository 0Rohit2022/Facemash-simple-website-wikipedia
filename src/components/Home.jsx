import React from 'react'
import vg from "../Assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>FaceMash</h1>
                    <p>Compare two people face to see who is more pretty.....</p>
                </main>
            </div>


            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>Welcome to FaceMash!
                    You can compare your face with
                     other people face to look who
                      looks more attractive.</p>
                </div>
            </div>



            <div className="home3" id='about'>
                <div>
                    <h1>Who We Are?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod eligendi a aspernatur, aliquid animi officiis sequi ad quae doloremque, debitis provident et sit minima quos numquam ut nemo optio voluptas deleniti? Porro ipsam est, ad recusandae aspernatur corporis veniam odit!</p>
                </div>
            </div>



            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s"}}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:"0.5s"}}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay:"0.7s"}}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay:"1s"}}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home