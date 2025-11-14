import { useEffect, useState } from "react";

function App() {
    const [todos, setTodos] = useState([
        { text: "Lunch", completed: false, _id: 1 },
    ]);

    useEffect(() => {
        async function fetchTest() {
            const responseOBJ = await fetch(`http://localhost:8080/todos`);

            const data = await responseOBJ.json();

            console.log(data);
            // setTodos(data);
        }

        fetchTest();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`handle submit n stuff`);
    }

    return (
        <>
            <h1>Todos</h1>
            <form onSubmit={handleSubmit}>
                <input required={true} />
                <button>SUBMIT</button>
            </form>
            {/* you use map so that you can create elements from the data of arrays; it needs a key prop for unique id and since mongo provides a unique id, you should be able to access it when pulling from mongo with -> "todo._id"*/}
            <ul>
                {todos.map((todo) => {
                    <li key={todo._id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => {}}
                        />
                        {todo.text}
                    </li>;
                })}
            </ul>
        </>
    );
}

export default App;
