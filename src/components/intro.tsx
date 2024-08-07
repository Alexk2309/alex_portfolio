import { motion } from 'framer-motion';
import '../styles/introPage.css';
import Typewriter from 'typewriter-effect';
import {Email, GitHub, LinkedIn} from '@mui/icons-material';
import RocketShip from './rocketShip';

function IntroPage() {
  return (
    <div id="intro_layout">
        <div className='intro_content'>
            <RocketShip></RocketShip>
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
                <span id='intro-line'></span>
                <p style={{fontSize: "20px", lineHeight: '1.8'}}>
                    I'm an aspiring software engineer, currently based in Sydney.
                    I have interest in fullstack development and data science. I
                    create projects now and then.
                </p>
                <div style={{display:'flex', flexDirection:'column', paddingTop: '10px'}}>
                    <div>
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            style={{border: 'solid', borderRadius: '7px', width: 'auto', alignItems: 'center', color: 'aqua', display: 'inline-flex'} }>
                            <a href='mailto:alexkim5682@gmail.com' style={{ textDecoration: 'none', color: 'inherit'}}>
                                <div id='get-in-touch'>
                                    <Email></Email>
                                    <span style={{paddingLeft:'10px', fontSize: '18px'}}>Let's get in touch!</span>
                                </div>
                            </a>
                        </motion.div>

                    </div>
                    <div id='get-in-extra-icons'>
                        <motion.a href='https://github.com/Alexk2309' whileHover={{ scale: 1.3 }} style={{ textDecoration: 'none', color: 'inherit'}}>
                            <GitHub></GitHub>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.3 }} href='https://www.linkedin.com/in/alex-kim-50616a23b/' style={{ textDecoration: 'none', color: 'inherit' }}>
                            <LinkedIn></LinkedIn>
                        </motion.a>
                    </div>

                </div>
            </motion.div>
        </div>
    </div>
  );
}

export default IntroPage;

