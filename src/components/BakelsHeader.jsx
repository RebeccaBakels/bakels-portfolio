import React from 'react';


function BakelsHeader() {

    return(
        
        <>
        <div className='header-profile'>
        <img
        className="profile-pic"
          src="assets\profile_pic.png"
          alt="red haired woman in a patterned blazer holding the edges of her glasses">
        </img>
        <div >
            <img className='profile-bio' src="assets/about.png" alt="Rebecca Bakels, Full-Stack Software Engineer, Hello, welcome to my portfolio! I am a full-stack developer enthusiastic about jumping into the tech world from my former job as a retail store manager! Below are a few of my current full-stack projects. " ></img>
        </div>
        </div>
        </>
    )
}

export default BakelsHeader