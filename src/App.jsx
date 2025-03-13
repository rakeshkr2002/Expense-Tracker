import Main from "./components/Main"
import Contexts from "./contextApi/Contexts"

const App = () => {
  return (
    <div>
      <Contexts>
        <Main></Main>
      </Contexts>
    </div>
  )
}

export default App
