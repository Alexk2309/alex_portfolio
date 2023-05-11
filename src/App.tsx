import IntroPage from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import QuickScrolls from './components/stickyScroll';

function App() {
    return (
        <>  
            <QuickScrolls></QuickScrolls>
            <IntroPage></IntroPage>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
        </>
    );
}

export default App;

