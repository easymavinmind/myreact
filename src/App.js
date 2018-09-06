import React, { Component } from 'react';
// import data from './data/products.json';

import Products from './component/products';
import Rest from './component/rest';

class App extends Component {
  constructor(){
    super()
    this.state = {
      data : [],
      sort : 1
    }

    this.getSizeMessage = this.getSizeMessage.bind(this)
    this.getSortExpensive = this.getSortExpensive.bind(this)
  }

  getSizeMessage(size, status){
    // console.log(size,status.target.checked)
    let sizedata = this.state.data
    if (status.target.checked) {
      sizedata.push(size)

    }
    else {
      for(var i in sizedata){
        if(sizedata[i] == size){
            sizedata.splice(i,1);
            break;
        }
      }
    }
    this.setState({
      data:sizedata
    })
  
    // console.log(this.state)
  }
      
  getSortExpensive(e){
    // console.log(sortdata, e)
    this.setState({
      sort:e.target.value
    })

  }

  render() {
    return (
      <div>
        <h1>This is my react app for shopping website</h1>
        <Rest/>
        <label><input type='checkbox' onClick={(e) => this.getSizeMessage('M', e)}/>M</label>
        <label><input type='checkbox' onClick={(e) => this.getSizeMessage('L', e)}/>L</label>
        <label><input type='checkbox' onClick={(e) => this.getSizeMessage('XL', e)}/>XL</label>
        <label><input type='checkbox' onClick={(e) => this.getSizeMessage('XXL', e)}/>XXL</label>

        <select value={this.state.sort} onChange={(e) => this.getSortExpensive(e)}>
          <option value='1' >Termahal</option>
          <option value='-1'>Termurah</option>
        </select>
            

      <Products sizeparam={this.state.data} sortparam={this.state.sort}/>
      </div>

    );
  }
}

export default App;
