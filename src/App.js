import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorCatcher from './ErrorCatcher/ErrorCatcher';

class App extends Component {
  state = {
      persons: [
        {
          name: 'Shalva',
          age: 29,
          id: 0
        },
        {
          name: 'Demetre',
          age: 5,
          id: 3
        },
        {
          name: 'Gabriel',
          age: 3,
          id: 5
        }
      ]
  };

  changeNameHandler = (event, index) => {
    const personsArr = [...this.state.persons];
    personsArr[index].name = event.target.value;
    this.setState({persons: personsArr});
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };
  deletePersonHandler = (personIndex) => {
    const personsArr = [...this.state.persons];
    personsArr.splice(personIndex, 1);
    this.setState({persons: personsArr});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid teal',
      padding: '8px',
      color: 'teal',
      cursor: 'pointer'
    };
    let persons = null;
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if (this.state.showPersons) {
      persons = (
          <div>
              {this.state.persons.map((person, index) => {
                  return <ErrorCatcher key={person.id}><Person
                    click={this.deletePersonHandler.bind(this, index)}
                    changed={(event) => {this.changeNameHandler(event, index); }}
                    name={person.name}
                    age={person.age}
                    key={person.id}/></ErrorCatcher>
                })
              }
          </div>
      )
    }
    return (
        <div className={classes.App}>
            <h1 className={assignedClasses.join(' ')}>Shakogele</h1>
            <p>
              <button
                style = {style}
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
            </p>
            {persons}
        </div>
    );
  }
}

export default App;
