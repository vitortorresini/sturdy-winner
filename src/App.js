import './App.css';
import TodoList from './components/todolist';

function App() {
  const lista = [
    {id: 1, text:'React'},
    {id: 2, text:'Lista Simples'},
    {id: 3, text:'Props'},
  ]


  return (
    <TodoList content={lista} />
  )
}

export default App;