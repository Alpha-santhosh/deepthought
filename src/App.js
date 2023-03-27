import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";

function App() {
  const [Data, setData] = useState({});
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respones = await fetch(
        "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
      );
      const data = await respones.json();
      setData(data);
      settasks(data.tasks);
    };
    fetchData();
  }, []);
  const { title } = Data;
  return (
    <div className="app">
      <Header />
      <Layout title={title} tasks={tasks} />
    </div>
  );
}

export default App;
