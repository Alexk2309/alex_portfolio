import IntroPage from './components/intro';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import NavigationBar from './components/nav-bar';

function App() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <IntroPage></IntroPage>
            <About></About>
            <Experience></Experience>
            <Projects></Projects>
            <div>hi</div>
        </>
    );
}

export default App;

