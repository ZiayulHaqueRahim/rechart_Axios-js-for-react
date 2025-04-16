
import { Suspense } from 'react'
import './App.css'
import ResultChart from './components/Result/ResultChart'


function App() {

  return (
    <>
      <Suspense>
        <ResultChart />
      </Suspense>
    </>
  )
}

export default App
