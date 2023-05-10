import '../styles/projects.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';
import Carousel from 'react-material-ui-carousel'
import profilePhoto from '../effects/bmo.jpg'
import loadingGif from '../effects/Loading.gif'
import twitterClonePhoto from '../effects/network.png'

function Item(props: any)
{
   
    return (
        <div className='project_showcase_item' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${props.item.image})`}}>
            <div style={{paddingTop: '250px', alignSelf: 'center'} }>
                <label style={{fontSize: '45px', fontWeight: 'bold'}}>{props.item.name} </label>
                <p style={{maxWidth: '750px'}}>{props.item.description}</p>
                <span style={{color: 'aqua', fontWeight: 'bold'}}>{props.item.frameWorksUsed}</span>
            </div>
            
            <div className='icon-row' >
                <a href={props.item.githubLink} className="icons">
                    <svg focusable="false" viewBox="0 0 24 24"   style={{fontSize: '25px', minHeight: '20px', width: 'auto'}}>
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                    </svg>
                </a>
                <a href={props.item.deployLink} className="icons">
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{fontSize: '25px', minHeight: '25px', width: 'auto',}}><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></svg>
                </a>      
            </div>     
        </div>
    )
}

function Projects() {
    interface projectItem {
        name: string;
        description: string;
        frameWorksUsed: string;
        image: string;
        githubLink: string;
        deployLink: string;
    }


    const items: projectItem[] = [
        {
            name: "Twitter Clone",
            description: "A functional clone of twitter. Users are able to create edit and remove their own posts. Posts are paginated, and users can gain followers or follow other people. Made using a SQL-lite database. ",
            frameWorksUsed: 'JavaScript, Django, SQL-lite',
            image: twitterClonePhoto,
            githubLink: 'https://github.com/Alexk2309/Networking',
            deployLink: 'https://www.pizzahut.com.au/'
        },

        {
            name: "Unfinished",
            description: "More up coming stay tuned!",
            frameWorksUsed: '',
            image: loadingGif,
            githubLink: '',
            deployLink: 'https://www.pizzahut.com.au/'
        },
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

export default Projects;

