import React,{Component} from 'react';
import './App.css';
import CardList from './CardList';
import ContainerInput from './ContainerInput'
import ContainerLevels from "./ContainerLevels";
import PageBar from "./PageBar";

class App extends Component{
  constructor(){
    super();
    this.state = {
      digimon : [],
      searchField : "",
      selectField : "",
      pageAktifState : 1,
      stringPage : "1"
    }
  }

  componentDidMount(){
    fetch(`https://digimon-api.herokuapp.com/api/digimon`)
        .then(respond => respond.json())
        .then(res => this.setState({digimon: res}))
  }

  searchChange = (event)=>{
    this.setState({pageAktifState: 1});
    this.setState({searchField:event.target.value});

  }

  pickChange = (event) =>{
    if(event.target.value === "All"){
      this.setState({selectField:""});
      this.setState({pageAktifState: 1});
    }else{
      this.setState({selectField:event.target.value});
      this.setState({pageAktifState: 1});

    }
  }

  onClickPaging = (event)=>{
      this.setState({stringPage:event.target.textContent});
      if(event.target.textContent === ">>"){
          this.setState({pageAktifState: this.state.pageAktifState+1});
      }else if(event.target.textContent === "<<"){
          this.setState({pageAktifState: this.state.pageAktifState-1});
          if(this.state.pageAktifState === 0){
            this.setState({pageAktifState: 1});
          }
      }else{
        this.setState({pageAktifState: Number.parseInt(event.target.textContent)});
      }
  }

  

  render(){
    let {digimon, searchField, selectField, pageAktifState,stringPage} = this.state;
    let filteredDigimons = digimon.filter((el)=>{
      return el.level.toLowerCase().includes(selectField.toLowerCase()) 
      && 
      el.name.toLowerCase().includes(searchField.toLowerCase());
      
    })

    let jumlahHalaman = Math.ceil(filteredDigimons.length/20);
    let currentDigimon= [];
    let pageAktif = pageAktifState;
    console.log("pageaktif",pageAktif)

    // if(stringPage === ">>"){
    //   if(pageAktifState >= jumlahHalaman){
    //       pageAktif = jumlahHalaman;
    //   }else{
    //       pageAktif = (pageAktif + 1);
    //   }
    // }else if(stringPage === "<<"){
    //     pageAktif = (pageAktif - 1);
    //     if(pageAktifState === 0){
    //        pageAktif = 1
    //       }
    // }else{
    //   pageAktif = Number.parseInt(stringPage);
    // }
    
    let page = pageAktif * 10;
    if(page === 10){
      page = 0;
    }


    for (let i = page; i < page+20; i++) {
      if(filteredDigimons[i] === undefined){
          break;
      }
      currentDigimon.push(filteredDigimons[i]);
    }

    // console.log("length :",currentDigimon)

    return(
        <main className="container">
          <div className="text-center btn-primary py-2">
            <h1>Digimon App</h1>
          </div>

          <div className="row mt-4 ml-2 mr-2" style={{margin:"auto"}}>
              <ContainerInput search={this.searchChange}/>
              <ContainerLevels pick={this.pickChange} />
          </div>

          <CardList digimon={currentDigimon} />
          <PageBar 
            jumlahHalaman={jumlahHalaman} 
            currentPage={this.onClickPaging} 
            pageAktif={pageAktif}
          />
        </main>
    );
  }
}

export default App;
