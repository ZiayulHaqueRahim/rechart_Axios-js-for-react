

import axios from 'axios'
import './App.css'
import ResultChart from './components/Result/ResultChart'
import { Suspense } from 'react';
import ResultMarks from './components/Result/ResultMarks';

const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
      <ResultChart />
      <Suspense  fallback={<span className='loading loading-spinner loading-lg'></span>} >
          <ResultMarks marksPromise={marksPromise} />

      </Suspense>
      
    </>
  )
}

export default App
