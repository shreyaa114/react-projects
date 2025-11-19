import './App.css';
import { Suspense } from 'react';
import {Todo} from './Todo.js';

// const Hobby = lazy(()=> import('./HobbyChecklist')); // lazy loading 

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Page is Loading....</div>}>
      <Todo/>
      </Suspense>
    </div>
  );
}

export default App;
