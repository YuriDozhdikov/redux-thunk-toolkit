import './App.css';
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, fetchTodos} from "./store/todoSlice";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
    const [text, setText] = useState('');
    const {status, error} = useSelector( state => state.todos);
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addNewTodo(text));
        setText('');
    };

    useEffect(() => {
       dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div className="App">
            <h1>Todo List</h1>
            <InputField text={text} handleSubmit={addTask} handleInput={setText}/>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2 style={{color: "darkred"}}>An error occurred: {error}</h2>}
            <TodoList />
        </div>
    );
}

export default App;
