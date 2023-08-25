//Homepage
import AddTaskButton from "../Components/AddTaskButton";
import DateComponent from "../Components/DateComponent";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TaskHolder from "../Components/TaskHolder";

export default function Home() {
  return (
  <div className="bg-theme-blue w-full h-max">
    <Navbar />
    <DateComponent />
    <TaskHolder />
    <Footer />
    <AddTaskButton />
  </div>
  );
}

