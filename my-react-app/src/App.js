import './App.css';
import { Suspense, lazy } from 'react';
import ScoreIncrementor from './ScoreIncrementor';

// const Hobby = lazy(()=> import('./HobbyChecklist')); // lazy loading 

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Page is Loading....</div>}>
      <ScoreIncrementor/>
      </Suspense>
    </div>
  );
}

export default App;
