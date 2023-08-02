import React, { useEffect, useRef } from 'react';

import { motion, useInView, useAnimation } from 'framer-motion';
import "./Info.css"

function Info() {

    const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const mainControls1 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      mainControls1.start('visible');
    }
    else{
      mainControls1.start('hidden');
    }
  }, [isInView1]);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  const mainControls2 = useAnimation();

  useEffect(() => {
    if (isInView2) {
      mainControls2.start('visible');
    }
    else{
      mainControls2.start('hidden');
    }
  
  }, [isInView2]);

  return (
    <div className='card-div' >
        <motion.div 
        ref={ref1}
             variants={{
                hidden: { x: -300, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              initial='hidden'
              animate={mainControls1}
              transition={{ duration: 0.5, delay: 0.3 }}
        className="card card-1">
            <ul>
                <li className="pack">Professional</li>
                <li id="professional" className="price bottom-bar">$249.99</li>
                <li className="bottom-bar">1 TB Storage</li>
                <li className="bottom-bar">5 Users Allowed</li>
                <li className="bottom-bar">Send up to 10 GB</li>
                <li><button className="btn active-btn">Learn More</button></li>
            </ul>
        </motion.div>
        
        <motion.div 
        ref={ref2}
            variants={{
                hidden: { x: 300, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              initial='hidden'
              animate={mainControls2}
              transition={{ duration: 0.5, delay: 0.4 }}
                className="card card-2">
            <ul>
                <li className="pack">Standard</li>
                <li id="professional" className="price bottom-bar">$100.99</li>
                <li className="bottom-bar">500 Gb Storage</li>
                <li className="bottom-bar">3 Users Allowed</li>
                <li className="bottom-bar">Send up to 5 GB</li>
                <li><button className="btn active-btn">Learn More</button></li>
            </ul>
        </motion.div>


    </div>
  )
}

export default Info