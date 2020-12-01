import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state= {
      monsters: [],
      searchField: ''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
  };

  handleChange = e => {
      this.setState({searchField: e.target.value})
  }

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <div className="App">
          {/*<CardList name="Ilyos"/>*/}
          {/*<input type="search" placeholder='search monsters' onChange={e => this.setState({searchField: e.target.value})}/>*/}
          <h1 className='title'>Monster Rolodex</h1>
          <SearchBox placeholder='search monsters'
                     handleChange={this.handleChange}/>

          <CardList monsters={filteredMonsters}>
            {/*<h1>Ilyos</h1>*/}
            {/*{this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}*/}
          </CardList>
        </div>
    )
  }
}

export default App;
