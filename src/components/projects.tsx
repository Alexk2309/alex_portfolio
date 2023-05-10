import '../styles/projects.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import profilePhoto from '../effects/bmo.jpg'



function Projects() {
    
    const items = [
        {
            name: "Twitter Clone",
            description: "A clone of twitter, utilised fetch apis",
            frameworksUsed: ''
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <HeaderSection>
            <div className='projects_layout'> 
                <span className='header-label' style={{paddingBottom: '30px'}}>/projects </span>
                <div id='project_carousel'>
                    <Carousel>
                        {items.map( (item, i) => <Item key={i} item={item} /> )}
                    </Carousel>
                </div>
    
            </div>
        </HeaderSection>
    );
}


function Item(props: any)
{
    return (
        <div className='project_showcase_item' style={{backgroundImage: `url(${profilePhoto})`}}>
            <label>{props.item.name} </label>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </div>
    )
}

export default Projects;

