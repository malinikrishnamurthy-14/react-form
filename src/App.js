import "./App.css";
import StudentEnrollmentForm from './components/StudentEnrollmentForm';
import StudentsList from './components/StudentsList';

function App() {
  return (
    <div className="app">
      <div className="form">
        <StudentEnrollmentForm />
      </div>
      <div className="students-list">
        <StudentsList />
      </div>
    </div>
  );
}

export default App;
