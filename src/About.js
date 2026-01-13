//import React from 'react'
//import { Link, useNavigate } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import blur from './images/blur.jpeg';
import blur1 from './images/blur1.jpeg';
import blur2 from './images/blur2.jpeg';
function About() {
  return (
    <>
    {/* Image with text overlay
    */}
    <div style={{ backgroundColor: "rgba(2, 29, 79, 1)", minHeight: "105vh", padding: "0", margin: "0" }}>
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
    <div style={{ width: '100%', height: '300px', margin: '0 auto', position: 'relative' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
     display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      color: 'white', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
    <h1 style={{ color: "rgba(168, 186, 238, 1)" }}>Because every story deserves to be sketched.</h1>
    <h3 style={{ textAlign: "center", maxWidth: "80%", lineHeight: "1.4", padding: "20px", fontWeight: "400" }}>
        At Paper Trails, we believe every idea deserves a heartbeat — a quiet pulse that travels from your imagination to our pencils. 
        What begins as a fleeting thought, a memory, or an image in your mind slowly unfolds into a hand-drawn sketch that carries emotion beyond pixels and perfection. 
        We exist to capture what words can’t — the warmth of a smile, the nostalgia of a place, the spark of a story waiting to be told through lines.
    
         <br/><br/>
Born from a love for storytelling and the timeless charm of paper, Paper Trails transforms your visions — whether a single description, a detailed photo, or just a fragment of inspiration — 
into art you can see, feel, and keep. From delicate portraits meant for gifting to expressive anime scenes and comic illustrations, each creation
 is shaped with intention, patience, and a trace of your world within it.
<br/><br/>
We let simplicity guide our strokes, because true art doesn’t shout — it whispers. Every line we draw is deliberate, every mark holds meaning.
 Between creativity and craftsmanship, our sketches find a balance — merging precision with emotion, design with depth. 
 More than just drawings, our art is a translation of feeling — a captured breath, a lingering memory, a silent echo of who you are.
<br/><br/>
Paper Trails isn’t just about sketching; it’s about preserving the intangible — 
moments turned into paper, emotions turned into form, and imagination turned into something beautifully real.
    </h3>
  </div>
</div>
</div>


  


    </div>
    </>
  )
}

export default About