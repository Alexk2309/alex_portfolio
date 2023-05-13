import '../styles/nav-bar.css';
import '../styles/index.css';

import { GitHub, Email, LinkedIn } from '@mui/icons-material';
function QuickScrolls() {

    interface links {
        name: string;
        id: string;
    }

    const scrollNav: links[] = [
        {name: '/home', id: 'intro_layout'}, 
        { name: '/about-me',id: 'about_layout'}, 
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
            {scrollNav.map((scrollLink) => (
                <label className='scroll-link' onClick={() => scrollToElement(scrollLink.id)} >{scrollLink.name}</label>
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

export default QuickScrolls;