import '../styles/projects.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';
import Carousel from 'react-material-ui-carousel'
import twitterClonePhoto from '../effects/twitter_clone.png'
import loadingGif from '../effects/Loading.gif'
import { Alert, } from '@mui/material';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { GitHub, OpenInBrowser } from '@mui/icons-material';


interface projectItem {
    name: string;
    description: string;
    frameWorksUsed: string;
    image: string;
    githubLink: string;
    deployLink: string;
}

function Item(props: any) {

    const alertVariants = {
        visible: { opacity: 1, transition: { duration: 0.8 } },
        hidden: { opacity: 0, transition: { duration: 0.5 }}
    };

    const [showAlert, setShowAlert] = useState(false);
    const control = useAnimation();
    useEffect(() => {
        if (showAlert) {
            control.start("visible");
        }
    }, [control, showAlert]);

    useEffect(() => {
        if (showAlert) {
          control.start("visible");
          
          const timeout = setTimeout(() => {
            handleAlertClose();
          }, 5000); // Set the desired duration in milliseconds
          
          // Clear the timeout when the component unmounts or when showAlert changes to false
          return () => clearTimeout(timeout);
        }
    }, [control, showAlert]);
    
    function showAlertIfNoLink(item: projectItem, event: any, isGit: boolean) {
        if (isGit) {
            if (item.githubLink === ''){
                event.preventDefault();
                setShowAlert(true);
            }
        }
        else {
            if (item.deployLink === '' ){
                event.preventDefault();
                setShowAlert(true);
            }
        } 
    }

    const handleAlertClose = () => {
        control.start("hidden");
        setTimeout(() => {
            setShowAlert(false);
        }, 500);
    };

    return (
        <div className='project_showcase_item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${props.item.image})`}}>
           <motion.div
                initial="hidden"
                animate={control}
                variants={alertVariants}
            >
                {showAlert && (
                    <Alert onClose={handleAlertClose} severity="error">
                        No link is available.
                    </Alert>
                )}
            </motion.div>
        
            <div className='icon-row' >
                <a href={props.item.githubLink} className="icons" onClick={(event) => showAlertIfNoLink(props.item, event, true)}>
                    <GitHub></GitHub>
                </a>
                
                <a href={props.item.deployLink} className="icons" onClick={(event) => showAlertIfNoLink(props.item, event, false)}>
                    <OpenInBrowser sx={{ scale: '1.2' }}></OpenInBrowser>
                </a>
    
            </div>     

            <div>
                <label style={{fontSize: '45px', fontWeight: 'bold'}}>{props.item.name} </label>
                <p style={{maxWidth: '750px'}}>{props.item.description}</p>
                <span style={{color: 'aqua', fontWeight: 'bold'}}>{props.item.frameWorksUsed}</span>
            </div>
            
           
        </div>
    )
}

function Projects() {
    const items: projectItem[] = [
        {
            name: "Twitter Clone",
            description: "A functional clone of twitter. Users are able to create edit and remove their own posts. Posts are paginated, and users can gain followers or follow other people. Made using a SQL-lite database. ",
            frameWorksUsed: 'JavaScript, Django, SQL-lite',
            image: twitterClonePhoto,
            githubLink: 'https://github.com/Alexk2309/Networking',
            deployLink: ''
        },

        {
            name: "Unfinished",
            description: "More upcomming stay tuned!",
            frameWorksUsed: '',
            image: loadingGif,
            githubLink: '',
            deployLink: ''
        },
    ]

    return (
        <div id='projects_layout'> 
            <HeaderSection>
                <span className='header-label' style={{paddingBottom: '30px'}}>/projects </span>
                <div id='project_carousel'>
                    <Carousel>
                        {items.map( (item, i) => <Item key={i} item={item} /> )}
                    </Carousel>
                </div>
            </HeaderSection>
        </div>
    );
}

export default Projects;

