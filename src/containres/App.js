import React, {Component} from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
    state = {
        persons: [
            {id: 0, name: 'Max', age: 28},
            {id: 1, name: 'John', age: 30},
            {id: 2, name: 'Stephani', age: 26},
        ],
        showPersons: false,
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(f=> {
            return id === f.id
        })
        const person = {...this.state.persons[personIndex]}
        person.name = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    }

    deletePersonHandler = (personIndex) => {
        const personsArray = [...this.state.persons];
        personsArray.splice(personIndex, 1);
        this.setState({
            persons: personsArray
        })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({
            showPersons: !doesShow
        })
    }

    render() {
        let person = null;

        if(this.state.showPersons) {
            person = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
            );
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>
                {person}
            </div>
        );
    }
}

export default App;
