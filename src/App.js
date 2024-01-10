import './App.css';
import HooksDemo from './components/hooks';
import ThemeProvider from './context';
import "./index.css"

function App() {
  return (
    <div className='container'>
      <ThemeProvider>
        <HooksDemo />
      </ThemeProvider>
    </div>
  );
}

export default App;
