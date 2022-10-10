import './App.css';
import Todos from './components/Todos';
import ViewTodos from './components/ViewTodos';
function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
     <Todos/>
     <ViewTodos></ViewTodos>
    </div>
  );
}

export default App;
