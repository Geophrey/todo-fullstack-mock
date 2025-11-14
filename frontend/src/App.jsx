import { useEffect } from "react";

function App() {

useEffect(() => {
  async function fetchTest() {
    const responseOBJ = await fetch(`http://localhost:8080/`)

    const resultJSONified = await responseOBJ.json()

    console.log(resultJSONified)
  }

  fetchTest()
}, [])

    return <><p>test</p></>;
}

export default App;
