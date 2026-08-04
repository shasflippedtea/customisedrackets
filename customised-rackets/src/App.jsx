import './App.css'
import BrandButtons from './components/brand-buttons'
import RacketViewer from './components/racketsviewer'

function App() {
  return (
  <main style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden', aligntItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <BrandButtons />
    <RacketViewer />
  </main>
  )
}

export default App