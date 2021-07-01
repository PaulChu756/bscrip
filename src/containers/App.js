import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {robots} from '../robots';
import '../components/ErrorBoundry';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: '' 
        }
    }

    /*
    componentDidMount(){
        //console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> this.setState({ robots: users}));
    }
    */

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //console.log(filterRobots);
    }

    render(){
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ? 
            <h1 className ='tc f1'>Loading</h1> : 
            (
                <div className = 'tc'>
                    <h1 className = "f1">Burning Stick Creative Memorial</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );   
    }
}

export default App;