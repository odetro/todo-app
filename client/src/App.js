import './App.css';
import logo from './siteLogo.png';
import { CalendarView } from './calander/CalendarView';
import { Notes } from './notes/notes';
import { TodosApp } from './todo-list/TodosApp';

function App() {
  return (
    <div className="body-container">
      <div className="topbar">
        <img className="logo-icon" src={logo} alt="New Day"/>
      </div>
      <div className="app-container">
        <div className="app-right">
          <TodosApp />
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
    </div>
  );
}

export default App;
