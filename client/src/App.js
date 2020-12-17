import './App.css';
import { CalendarView } from './calander/CalendarView';
import { Notes } from './notes/notes';
import { TodoListApp } from './todo-list/TodoListApp';

function App() {
  return (
    <div className="app-container">
      <div className="topbar">

      </div>
      <div className="app-right">
        <TodoListApp />
      </div>
      <div className="app-left">
        <div className="app-left-top">
          <Notes />
        </div>
        <div className="app-left-bottom">
          <CalendarView />
        </div>
      </div>
    </div>
  );
}

export default App;
