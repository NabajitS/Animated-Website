import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { motion, useInView, useAnimation } from 'framer-motion';
import Info from './Info';

import Typewriter from 'typewriter-effect';



function Home() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const mainControls1 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      mainControls1.start('visible');
    }
  }, [isInView1]);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView2) {
      mainControls2.start('visible');
    }
  }, [isInView2]);

  

  return (
    <div className='home'>
      <div className='container'>
        <Navbar />
        <header ref={ref1} className='header'>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            animate={mainControls1}
            transition={{ duration: 0.5, delay: 0.25 }}
            className='header-content'
          >
            <h1 className='landing-text'>
              Build profit-first campaigns with your  <br /> personalized, simple and effective  <br /> 
              
            </h1>

            <h2 className="typewriter-div" >
              <Typewriter  
                      options={{
                      strings: ['influencer marketing assistant!', 'Social Media Assistant!'],
                      autoStart: true,
                      loop: true,
                      delay: 100
                    }}
                  // onInit={(typewriter) => {

                  //   typewriter.typeString('influencer marketing assistant!')

                  //     .pauseFor(1500)
                  //     .deleteAll()
                  //     .typeString('Social Media Assistant!')
                  //     // .loop(true)
                  //     .start();
                      
                  // }}
                />
            </h2>

            <p className='extra-text'>
              Get influencers to promote your brand, track sales, and build long-term <br /> relationships  without any
              time-consuming manual work.
            </p>
            <button className='filled-btn'>Claim My Free Access</button>
            <button className='outlined-btn'>Learn More / About</button>
          </motion.div>
        </header>
      </div>

      <div className='video-div' ref={ref2}>
        <motion.div
          className='video-section'
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls2}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
           <iframe width="75%" style={{height: "87%"}} src="https://www.youtube.com/embed/hjbxaYTMhy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </motion.div>
      </div>

      
      <Info/>


      <footer className='footer' >
        Copyright © Abhijit Sharma. Designed And Coded By Stackoverflow .
      </footer>

    </div>
  );
}

export default Home;
