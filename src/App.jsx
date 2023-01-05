import Tasklist from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    <main className="bg-zinc-900 h-full">
      <h1 className="text-3xl font-bold text-white text-center p-8">Task Manager</h1>
      <div className="container mx-auto p-10">
        <TaskForm />
        <Tasklist />
      </div>
    </main>
  );
}

export default App;
