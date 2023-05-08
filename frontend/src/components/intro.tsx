import { motion } from 'framer-motion';
import '../styles/introPage.css';
import Typewriter from 'typewriter-effect';


function MyMoon() {
    const SVGMoon = (props: any) => ( 
        <motion.svg
            initial= {{
                x:30,
                y:120
            }}
            animate={{ x: 300, y: -280,
                opacity: [0.15, 0.8]}}

                
            transition={{ 
                duration: 3,
                ease: "easeInOut",
            }}
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 495 495"
            style={{
                enableBackground: "new 0 0 495 495",
                width:175,
                height:180,
                position: "absolute",
                top: "300",
                right: "300",
            }}
            xmlSpace="preserve"
            {...props}
        >
          <g>
            <path
              style={{
                fill: "#FFEB99",
              }}
              d="M293.056,247.5c0-109.382-88.672-198.054-198.054-198.054c-17.072,0-33.642,2.166-49.446,6.229 c55.602,45.385,91.113,114.454,91.113,191.825s-35.51,146.44-91.113,191.825c15.804,4.063,32.373,6.229,49.446,6.229 C204.384,445.554,293.056,356.882,293.056,247.5z"
            />
            <path
              style={{
                fill: "#FFDE55",
              }}
              d="M201.944,0C142.624,0,88.186,20.878,45.556,55.675c15.804-4.063,32.373-6.229,49.446-6.229 c109.382,0,198.054,88.672,198.054,198.054S204.384,445.554,95.002,445.554c-17.072,0-33.642-2.166-49.446-6.229 C88.186,474.122,142.624,495,201.944,495c136.69,0,247.5-110.81,247.5-247.5S338.634,0,201.944,0z"
            />
          </g>
        </motion.svg>
    );
    
    return (
        <SVGMoon />
    );
}

function IntroPage() {
  return (
    <div className="intro_layout">
        <div className='intro_content'>
        <motion.div className='example-container' initial={{x: 0}} animate={{x: 200}} > </motion.div>
            <div className='typewriter-container'>
            <Typewriter 
                options={{
                strings: ['hi, <span id="portfolio_username">alex</span> here.'],
                autoStart: true,
                loop: false,
                cursor: '<span style="color: aqua;">|</span>',
                deleteSpeed: Infinity
            }}/>
            </div>
            <motion.div 
                initial={{y:200, opacity: 0}}
                animate={{y:10, opacity: [0.15, 0.95]}} id='bio'
                transition={{duration: 1,
                    ease: "easeInOut"}}>
                <span>I program sometimes.</span>
                <p style={{fontSize: "20px", lineHeight: '1.8'}}>
                    I'm an aspiring software engineer, currently based in Sydney.
                    I have interest in fullstack development and data science. I
                    create projects now and then.
                </p>
            </motion.div>
        </div>
    </div>
  );
}
export default IntroPage;

