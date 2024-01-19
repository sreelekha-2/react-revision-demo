import './App.css';
import ImageSlider from './components/carousel';
import HooksDemo from './components/hooks';
import ThemeProvider from './context';
import "./index.css"

function App() {
  return (
    <div className='container'>
      <ThemeProvider>
        <HooksDemo />
      </ThemeProvider>

      <ImageSlider/>
    </div>
  );
}

export default App;
