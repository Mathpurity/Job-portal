import React, { Component } from 'react';
import './App.css';
import CustomModal from './components/Modal';

const tasks = [
  {
    id: 1,
    title: "Duming",
    description: "Sending dunning letters to clients for uncollected cash",
    completed: false
  },
  {
    id: 2,
    title: "Order Release",
    description: "Check out customers' accounts and release or block orders accordingly",
    completed: false
  },
  {
    id: 3,
    title: "Weekly Reports",
    description: "Sending the weekly reports for overdue invoices",
    completed: false
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      taskList: tasks,
    };
  }

  // Toggle modal visibility
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    alert('Saved' + JSON.stringify(item));
  };

  handleDelete = item => {
    alert('Deleted' + JSON.stringify(item));
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = status => {
    this.setState({ viewCompleted: status });
  };

  renderTablist = () => {
    return (
      <div className='my-5 tab-list'>
        <span 
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
        </span>
        <span 
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incompleted
        </span>
      </div>
    );
  }

  // Render items in the list (completed or incomplete)
  renderItems = () => {
    const { viewCompleted, taskList } = this.state;
    const newItems = taskList.filter(item => item.completed === viewCompleted);

    return newItems.map(item => (
      <li 
        key={item.id} 
        className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm"
      >
        <span 
          className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo text-decoration-line-through" : ""}`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button onClick={() => this.editItem(item)} className="btn btn-info btn-sm mr-3">Edit</button>
          <button onClick={() => this.handleDelete(item)} className="btn btn-danger btn-sm">Delete</button>
        </span>
      </li>
    ));    
  };

  render() {
    return (
      <main className='context p-3'>
        <h1 className='text-light text-uppercase text-center my-4'>
          Task Manager
        </h1>
        <div className='row'>
          <div className='col-md-6 col-sma-10 mx-auto p-0'>
            <div className='card p-4'>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-warning'>Add Task</button>
              </div>
              {this.renderTablist()}
              <ul className='list-group list-group-flush mt-3'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        <footer className='my-5 mb-2 bg-dark text-white text-center'>
          Copyright 2024 &copy; All Rights Reserved
        </footer>
        {this.state.modal ? (
          <modal activeItem={this.state.activeItem} toggle={this.toggle} 
          onSave={this.handleSubmit} />
        ) : null}
      </main>
    );
  }
}

export default App;
