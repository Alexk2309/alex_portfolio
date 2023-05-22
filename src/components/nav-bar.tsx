import '../styles/nav-bar.css';
import '../styles/index.css';

import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import HeaderSection from '../effects/scrollEffect';
function NavigationBar() {

    interface link {
        name: string;
        id: string;
    }

    const scrollNav: link[] = [
        {name: '/home', id: 'intro_layout'}, 
        {name: '/about-me',id: 'about_layout'}, 
        {name: '/experience', id: 'experience_layout'},
        {name: '/projects',id: 'projects_layout'}
    ];

    function scrollToElement(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return (
        <div className='sidebar-nav'> 
            {scrollNav.map((scrollLink: link, index: number) => (
                <HeaderSection key={index} duration={1 + (0.15 * index)} style={{paddingTop: '3px'}}>
                    <label className='scroll-link' onClick={() => scrollToElement(scrollLink.id)} >{scrollLink.name}</label>
                </HeaderSection>
            ))}
            <div className='nav-icons'>
                <a href='mailto:alexkim5682@gmail.com' className='icon-link'>
                    <Email></Email>
                </a>
                <a href='https://github.com/Alexk2309' className='icon-link'>
                    <GitHub></GitHub>
                </a><a href='https://www.linkedin.com/in/alex-kim-50616a23b/' className='icon-link'>
                    <LinkedIn></LinkedIn>
                </a>
            </div>
        </div>
    );
}

export default NavigationBar;