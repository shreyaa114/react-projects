import './App.css';
import { Suspense } from 'react';
import {FetchUser} from './FetchUser.js';

// const Hobby = lazy(()=> import('./HobbyChecklist')); // lazy loading 

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Page is Loading....</div>}>
      <FetchUser/>
      </Suspense>
    </div>
  );
}

export default App;
