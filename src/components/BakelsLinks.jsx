import React from 'react';
import Button from '@material-ui/core/Button';

function BakelsLinks() {
    return(
        <>
        <div className='button-group'>
        <Button style={{backgroundColor: '#ffde59'}} size="large" variant="contained" href="https://github.com/RebeccaBakels" >GitHub</Button>
        <Button style={{backgroundColor: '#ff9659'}} size="large" variant="contained" href="https://www.linkedin.com/in/rebecca-bakels-311920139/" >LinkedIn</Button>
        <Button style={{backgroundColor: '#ff6859'}} size="large" variant="contained" href="https://firebasestorage.googleapis.com/v0/b/bocacode-fb.appspot.com/o/candidates%2Fresumes%2FBakels_Resume_2021.pdf?alt=media" >Resume</Button>
        </div>
        </>
    )
}

export default BakelsLinks