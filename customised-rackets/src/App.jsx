import './App.css'
import BrandButtons from './components/brand-buttons'
import RacketViewer from './components/racketsviewer'

function App() {
  return (
  <main style={{ display: 'flex', flexDirection: 'row'}}>
    <BrandButtons />
    <RacketViewer />
  </main>
  )
}

export default App