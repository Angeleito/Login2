import ThemeToggle from "../components/ThemeToggle";
import TodoList from "../components/ToDoList";
//import UserList from "../components/UserList";

const Dashboard = () => {
  return (
    <div className="flex gap-5 bg-slate-500 dark:bg-slate-700 h-screen">
      <div className="w-20 h-12 z-10 translate-y-24">
        <ThemeToggle/>
      </div>
      <div className="w-[20%] h-screen fixed bg-slate-400 dark:bg-slate-600 shadow-2xl shadow-slate-600 rounded-br-2xl rounded-r-2xl">

      </div>
      <div className="flex flex-col gap-4 translate-x-40 py-5">
        <TodoList />
        {/*<UserList />*/}
      </div>
    </div>
  );
};

export default Dashboard;
