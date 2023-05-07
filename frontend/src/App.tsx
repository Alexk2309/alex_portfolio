import './styles/introPage.css';
import HeaderSection from './effects/scrollEffect';
import IntroPage from './components/intro';

function App() {
  return (
    <>
        <IntroPage></IntroPage>
        <HeaderSection >
            <div style={{marginBottom: '1000px'}} className='sections' > 
                /about me
            </div>
            </HeaderSection>

        <HeaderSection>
            <div > 
                /about me
            </div>
        </HeaderSection>
    </>
  );
}

export default App;

