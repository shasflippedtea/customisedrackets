import './App.css'
import { useState } from 'react';
import BrandButtons from './components/brand-buttons'
import RacketViewer from './components/racketsviewer'

function App() {
  const [selectedModel,setSelectedModel] = useState(null);

  return (
  <main style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', aligntItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <BrandButtons setSelectedModel={setSelectedModel}/>
    <RacketViewer selectedModel={selectedModel}/>
  </main>
  )
}

export default App