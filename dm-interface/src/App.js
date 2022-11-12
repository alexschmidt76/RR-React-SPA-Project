import './App.css'
import TitleBar from './components/TitleBar'
import Initiatives from './components/initiative-components/Initiatives'

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Initiatives />
      {/*<EnemyHealth />
      <EnemyStats />
      <NpcStats /> */}
    </div>
  )
}

export default App;
