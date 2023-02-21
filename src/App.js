import React from 'react';
import { Provider } from 'react-redux';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';
import logo from './logo.svg';
import './App.css';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo"/>
          <h3>Task List</h3>
        </div>
        <div className="list">
            <TodoItem />
        </div>
        <div className="input-form">
          <FormInput />
        </div>
        <EditModal />
        <DeleteModal />
      </div>
    </Provider>
  );
}

export default App;
