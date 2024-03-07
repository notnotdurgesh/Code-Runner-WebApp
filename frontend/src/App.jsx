import './App.css';
import { CodeEditor } from './components/CodeEditor'; 
import { Output } from './components/Output';
import { ButtonGroup } from './components/ButtonGroup';
import { Header } from './components/Header';

function App() {

  return (
    
    <div className="h-screen grid place-items-center bg-purple-700">

        <Header />
        <CodeEditor />
        <ButtonGroup />
        <Output />

    </div>
  );
}

export default App;
