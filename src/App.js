import React, {useState} from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "reading a book"
    },
    {
      id: 2,
      title: "workout training"
    }
  ]);

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: "",
  });

  const [deleteData, setDeleteData] = useState({
    id: ""
  })

  const update = () => {
    const {id, title} = editData
    const newData = {id, title}
    const newTodos = todos
    newTodos.splice((id-1), 1, newData)
    setTodos(newTodos);
    setIsEdit(false);
    setEditData({
      id: "",
      title: ""
    })
  }

  const setTitle = e => {
    setEditData({
        ...editData,
        title: e.target.value
    })
  }

  const openModal = (id, data) => {
    setIsEdit(true);
    setEditData({
      id,
      title: data
    })
  }

  const closeModal = () => {
    setIsEdit(false);
  }


  const openModalDelete = (id) => {
    setIsDelete(true);
    setDeleteData({
      id
    })
  }

  const closeModalDelete = () => {
    setIsDelete(false);
  }

  const deleteTask = id => {
    setTodos(todos.filter(item => item.id !== id));
    setIsDelete(false);
  }

  const addTask = data => {
    const id = todos.length
    const newData = {
      id: id + 1,
      title: data
    }

    setTodos([...todos, newData])
  }

  return (
    <div className="app">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <h3>Task List</h3>
      </div>
      <div className="list">
        {todos.map(item => 
          <TodoItem 
            key={item.id} 
            todo={item}
            open={openModal}
            openDelete={openModalDelete}
          />
        )}
      </div>
      <div className="input-form">
        <FormInput add={addTask}/>
      </div>
      <EditModal 
        edit={isEdit} 
        close={closeModal} 
        change={setTitle}
        data = {editData}
        update={update}
      />
      <DeleteModal 
        isDelete={isDelete}
        data={deleteData}
        close={closeModalDelete}
        del={deleteTask}
      />
    </div>
  );
}

export default App;
