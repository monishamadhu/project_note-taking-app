import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from './Components/HeaderComponent';
import ViewNotes from './Components/ViewNotesComponent';
import ViewNote from './Components/ViewNoteComponent';
import CreateNote from './Components/CreateNoteComponent';

import './App.css';
class App extends Component {
  state = {
    editMode: {
      active:false,
      id:null
    },

    title: '',
    description: '',
    notes: [
      {
        id: 1,
        title: 'Title 1',
        description: 'Description 1'
      },
      {
        id: 2,
        title: 'Title 2',
        description: 'Description 2'
      },
      {
        id: 3,
        title: 'Title 3',
        description: 'Description 3'
      },
      {
        id: 4,
        title: 'Title 4',
        description: 'Description 4'
      }
    ],
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleClick = () => {
    if (!this.state.title.trim() || !this.state.description.trim()) {
      alert('Missing Title AND Description!')
      return
    }
    const notes = [...this.state.notes]
    if(this.state.editMode.active){
      const filteredNotes =notes.filter ( note => note.id !== +this.state.editMode.id)
      const updatedNote = {
        id : this.state.editMode.id,
        title: this.state.title,
        description: this.state.description
      }
      this.setState({
        editMode: {
          active:false,
          id: null
        },
        title: '',
        description: '',
        notes: [updatedNote,...filteredNotes]
      })
    }
    else{
      const savedNotes = this.state.notes.slice()
      const newNote = {
        id: Math.round( Math.random() * 1000),
        title: this.state.title,
        description: this.state.description,
      }
      savedNotes.unshift(newNote)
      this.setState({ notes: savedNotes, title: '', description: '' })
  }
  }
  handleDelete = (id) => {
    const notes = [...this.state.notes]
    const filteredNotes = notes.filter(note => note.id !== +id)
    this.setState({ notes: filteredNotes})
  }

  handleEdit = (id) => {
    const notes = [...this.state.notes]
    const currentNote = notes.find(note => note.id === +id)
    this.setState({title: currentNote.title, 
      description: currentNote.description,
       editMode: {
            active: true, id: id
    } 
  })
  }

  render() {
    return (
      <div className='container'>
        <Header/>
        <Switch>
          <Redirect exact from='/' to='/view-notes'/>

          <Route path='/view-notes' render= { (props) => (
             <ViewNotes
             notes= {this.state.notes}
             {...props}
           />
           )}
            
          />
          
          <Route path='/create-note' render={(props) => (
            <CreateNote 
              title={this.state.title}
              description={this.state.description}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
              {...props}
            />
            )} />

            <Route path= '/view-note/:id' render= {(props)=> (
                <ViewNote
                  notes= {this.state.notes}
                  handleDelete={this.handleDelete}
                  handleEdit= {this.handleEdit}
                  {...props}
                />
                )}
            />
        </Switch>
       
      </div>
    )
  }
}
export default App;
