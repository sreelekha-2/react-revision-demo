import './App.css';
import ImageSlider from './components/carousel';
import HooksDemo from './components/hooks';
import ThemeProvider from './context';
import "./index.css"
import MyLoadingComponent from "./components/hoc"

function App() {

  // const NewLoadingComponent=withLoading()
  return (
    <div className='container'>

      <MyLoadingComponent />
      <ThemeProvider>
        <HooksDemo />
      </ThemeProvider>

      <ImageSlider />

    </div>
  );
}

export default App;
