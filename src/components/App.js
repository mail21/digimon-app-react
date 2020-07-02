import React,{Component} from 'react';
import './App.css';
import CardList from './CardList';
import ContainerInput from './ContainerInput'
import ContainerLevels from "./ContainerLevels";

class App extends Component{
  constructor(){
    super();
    this.state = {
      digimon : [],
      searchField : "",
      selectField : ""
    }
  }

  componentDidMount(){
    // this.setState({digimon: Digimon.getAllDigimon()});
    fetch(`https://digimon-api.herokuapp.com/api/digimon`)
        .then(respond => respond.json())
        .then(res => this.setState({digimon: res}))
    // console.log(this.state.digimon);
  }

  searchChange = (event)=>{
    this.setState({searchField:event.target.value});

  }

  pickChange = (event) =>{
    if(event.target.value == "All"){
      this.setState({selectField:""});
    }else{
      this.setState({selectField:event.target.value});
    }
  }

  render(){
    console.log(this.state.searchField)
    let {digimon, searchField, selectField} = this.state;

    let filteredDigimons = digimon.filter((el)=>{
        return el.level.toLowerCase().includes(selectField.toLowerCase()) 
                  && 
                el.name.toLowerCase().includes(searchField.toLowerCase());
      
    })
    
    return(
        <main className="container">
          <div className="text-center btn-primary py-2">
            <h1>Digimon App</h1>
          </div>

          <div className="row mt-4 ml-2 mr-2" style={{margin:"auto"}}>
              <ContainerInput search={this.searchChange}/>
              <ContainerLevels pick={this.pickChange} />
          </div>

          <CardList digimon={filteredDigimons}/>
        </main>
    );
  }
}

export default App;
