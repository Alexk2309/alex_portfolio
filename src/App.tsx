import IntroPage from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import { motion } from 'framer-motion';
import HeaderSection from './effects/scrollEffect';

function App() {
    return (
        <>
            <IntroPage></IntroPage>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <HeaderSection>
                <div style={{ alignSelf: 'center'}}>
                Buit and maintained by Alex
                </div>
            </HeaderSection>
           
        </>
    );
}

export default App;

