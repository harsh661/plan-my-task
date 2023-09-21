import Columns from "./components/Columns"
import {useStore} from "./utils/store"

function App() {
  const { cart, addToCart } = useStore()

  return (
    <div className="flex justify-center gap-10">
      <Columns status={"TODO"}/>
      <Columns status={"ONGOING"}/>
      <Columns status={"DONE"}/>
    </div>
  )
}

export default App
