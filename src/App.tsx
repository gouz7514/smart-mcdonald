import './style/style.scss'

import Header from './components/Header'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Header title="This is title" />
      <div className="container">
        <Button textColor="white" text="hello world" className="test" name="Kim"></Button>
      </div>
    </div>
  );
}

export default App;
