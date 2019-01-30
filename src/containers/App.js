import React, { Component } from 'react';
// import {cats} from './cats.js'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
class App extends Component {

  constructor(){
    super()
    this.state = {
      catsList: [],
      searchfield: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(cats => this.setState({catsList: cats}))
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }

  render(){
    const {catsList, searchfield} = this.state
    const filteredCats = catsList.filter( cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if (!catsList.length){
      return <h1 className='f1 tc'>LOADING...</h1>
    }else{
      return(
        <div className="tc"> 
          <h1 className="f1">CatFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList cats={filteredCats}/>
          </Scroll>
        </div>
      )
    }
  }
}

export default App