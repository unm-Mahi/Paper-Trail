//import React from 'react'
//import { Link, useNavigate } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import blur from './images/blur.jpeg';
import blur1 from './images/blur1.jpeg';
import blur2 from './images/blur2.jpeg';
function Origins() {
  return (
    <>
    {/* Image with text overlay
    */}
    <div style={{ backgroundColor: "rgba(2, 29, 79, 1)", minHeight: "100vh", padding: "0", margin: "0" }}>


    <div style={{ width: '100%', height: '680px', margin: '0 auto', position: 'relative' }}>
  <img src={blur} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
    <h1 style={{ color: "rgba(168, 186, 238, 1)" }}>Every idea leaves a trail.</h1>
    <h3  textAlign="center">Where imagination wanders, our pencils follow — <br />turning your stories, photos, and emotions into timeless, hand-drawn sketches that speak softly.</h3>
  </div>
</div>
<div style={{ width: '100%', height: '300px', margin: '0 auto', position: 'relative' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
    <h1 style={{ color: "rgba(168, 186, 238, 1)" }}>From words or images, beauty takes form.</h1>
    <h3 textAlign="center">At Paper Trails, every sketch begins with you.<br />
    A photo, a thought, or a simple line of text — we turn it into art.<br/>
    Each trail we draw holds a whisper of your story.</h3>
  </div>
</div>
<div style={{ width: '100%', height: '300px', margin: '0 auto', position: 'relative' }}>
  <img src={blur1} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
    
  </div>
</div>
<div style={{ width: '100%', height: '300px', margin: '0 auto', position: 'relative' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
    <h1 style={{ color: "rgba(168, 186, 238, 1)" }}>Because every story deserves to be sketched.</h1>
    <h3 textAlign="center">Paper Trails brings your imagination to life.<br />
    Just share your image or words, and we’ll sketch your story with care.<br />
    Art that feels personal, made for gifts, comics, and creative hearts.</h3>
  </div>
</div>
<div style={{ width: '100%', height: '300px', margin: '0 auto', position: 'relative' }}>
  <img src={blur2} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
    </div>
</div><div style={{ width: '100%', height: '100px', margin: '0 auto', position: 'relative' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
    </div>
</div>


  


    </div>
    </>
  )
}

export default Origins