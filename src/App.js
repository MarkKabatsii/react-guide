import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: 0, name: 'Max', age: 28},
            {id: 1, name: 'John', age: 30},
            {id: 2, name: 'Stephani', age: 26},
        ],
        showHandler: false,
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

    togglePersonHandler = () => {
        const doesShow = this.state.showHandler
        this.setState({
            showHandler: !doesShow
        })
    }

    deletePersonHandler = (personIndex) => {
        const personsArray = [...this.state.persons];
        personsArray.splice(personIndex, 1);
        this.setState({
            persons: personsArray
        })
    }

    render() {
        let person = null
        if (this.state.showHandler) {
            person =
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                changed={(event) => this.nameChangeHandler(event, person.id)}/>
                        })
                    }
                </div>
        }
        return (
            <div className="App">
                <button onClick={this.togglePersonHandler}>Toggle Person</button>
                {person}
            </div>
        );
    }
}

export default App;
