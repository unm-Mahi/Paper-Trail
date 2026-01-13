import React from 'react';
import s1 from './images/s1.jpeg';
import s2 from './images/s2.jpeg';
import s3 from './images/s3.jpeg';
import s4 from './images/s4.jpeg';
import s5 from './images/s5.jpeg';
import s6 from './images/s6.jpeg';
import s7 from './images/s7.jpeg';
import s8 from './images/s8.jpeg';
import s9 from './images/s9.jpeg';
import s10 from './images/s10.jpeg';

// Array of images and their text
const images = [
  { src: s1, title: "Whispering Pages", desc: "Stories hidden between folds of paper." },
  { src: s2, title: "Ink Dreams", desc: "A journey of imagination through ink and lines." },
  { src: s3, title: "Faded Memories", desc: "Echoes of old letters and forgotten notes." },
  { src: s4, title: "Flying Thoughts", desc: "Ideas taking flight across blank sheets." },
  { src: s5, title: "Paper Waves", desc: "Ripples of creativity in paper oceans." },
  { src: s6, title: "Silent Letters", desc: "Words that speak without sound." },
  { src: s7, title: "Folded Horizons", desc: "Worlds revealed in creases and folds." },
  { src: s8, title: "Sketching Time", desc: "Moments captured in graphite trails." },
  { src: s9, title: "Bound by Lines", desc: "Connections drawn across pages." },
  { src: s10, title: "Ephemeral Marks", desc: "Art that lingers, then fades like a whisper." },
];

// Reusable overlay style
const overlayStyle = {
  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
  display: 'flex', flexDirection: 'column',
  justifyContent: 'center', alignItems: 'center', color: 'white', 
  textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '10px'
};

function Traces() {
  return (
    <> 
    <div style={{ backgroundColor: "rgba(158, 185, 234, 0.21)",  padding: "0", margin: "0" }}>  
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {images.map((img, i) => (
        <div key={i} style={{ position: 'relative', width: '30%', height: '275px' }}>
          <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }} />
          <div style={overlayStyle}>
            <h5>{img.title}</h5>
            <p>{img.desc}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>

  );
}

export default Traces;