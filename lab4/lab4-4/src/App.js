import datasource from "./data.js";
import { useEffect, useState, useCallback } from "react";
import query from "./Query";
import Header from "./header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
 
function App() {
  const [ toDoList, setToDoList ] = useState([{
    "todo": " ",
    "done": " "
  }]);

  const fetchData = useCallback(() => {
    const queryText = JSON.stringify(query);
      fetch(datasource.baseURL, {
       method: "POST",
       headers: datasource.headers,
       body: queryText,
     }).then((response) => response.json())
       .then((data) => {
         const datalist = data.data.list;
          setToDoList(datalist);
       })
       .catch((err) => {
         console.log(err);
       });
   }, []);
 
   useEffect(() => {
     fetchData();
   }, [fetchData]);

   function handleClear() {
    const clearQuery = {
     query: `
     mutation{clearAll {
      todo
      done
    }}
       `,
 };
    const queryText = JSON.stringify(clearQuery);
    let cleared = [{"todo": "", "done": ""}];
     fetch(datasource.baseURL, {
       method: "POST",
       headers: datasource.headers,
       body:queryText,
     }).then((response) => response.json())
     .then(setToDoList(cleared))
       .catch((err) => {
         console.log(err);
       });
   };

   const addTask = (userInput ) => {
     const dataQuery = {
     query: `
     mutation {addtodo(
         input: {todo:"${userInput}", 
           done:"false" }
       ){todo,done}}
       `,
 };
    const queryText = JSON.stringify(dataQuery);
     fetch(datasource.baseURL, {
       method: "POST",
       headers: datasource.headers,
       body:queryText,
     }).then((response) => response.json())
     .then(fetchData)
       .catch((err) => {
         console.log(err);
       });
   };

 const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
    let taskProgress="";
    if(task.todo === String(id)){
      if(task.done==="true"){ taskProgress="false" }
       else{
         taskProgress="true" }
     }
    return task.todo === String(id) ? { ...task, done: taskProgress} : { ...task};
  });
  setToDoList(mapped);
  }

  const clearCompleted = () => {
    handleClear();
    let incomplete = toDoList.filter(todo => {
      return todo.done ==="false";
    });
    incomplete.forEach(element => {
      addTask(element.todo);
    });
  }

 return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle}  handleClear={handleClear} clearCompleted={clearCompleted}/>
      
    </div>
  );
}

 
export default App;