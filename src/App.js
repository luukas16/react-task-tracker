import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react'

import './App.css'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "kick daniel in the balls 2:00pm",
        reminder: true,
    },
    {
        i: 2,
        text: "literally have a wank 2:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Admit im gay 2:45pm",
        reminder: true,
    },
    {
        id: 4,
        text: "Come out of the closet 3:00pm",
        reminder: true,
    },
    {
        id: 5,
        text: "Become Haram 3:15pm",
        reminder: true,
    }
])

const deleteTask = (id) => {
  console.log("delete", id)
}

  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks} onDelete={deleteEvent}/>
    </div>
  );
}

export default App;
