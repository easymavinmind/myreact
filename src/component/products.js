import React, { Component } from 'react';

// import Cart from component/cart;

class Products extends Component {
  constructor(props){
    super(props)
  }
    showProduct(sizeparam, sortparam){
        var tesdata = require('../data/products.json')
        var hasil = [];
        for(var sz in sizeparam){
            tesdata.products.map((val, i) => {
              if (val.availableSizes.includes(sizeparam[sz])) {
                  if(hasil.some(e => e.title == val.title)) {
                    }
                  else{
                    hasil.push({title : val.title, price : val.price, size: val.availableSizes, sku: val.sku});
                  }
            }
            });
          }
        
        hasil = this.sortProduct(hasil,sortparam)
        
        var hasil_dict = {count : hasil.length, product: hasil}

        // var hasil_dict = {count : hasil.length, product: hasil}
        return hasil_dict
        // return {nama: list, abc : count};
      }
    
    sortProduct(product, sortparam){
      var hasil_sorted = product.map(function(h) {
        return [h, h.price];
      });
      // Sort the array based on the second element
      hasil_sorted.sort(function(first, second) {
        return (second[1]- first[1])*parseInt(sortparam);
      });
      hasil_sorted = hasil_sorted.map(hs => hs[0])
      return hasil_sorted
    }


      render() {

    var disp_product = this.showProduct(this.props.sizeparam, this.props.sortparam).product.map((val,i) => {
        return (
          <div key={i}>
            <p> {val.title}, {val.price}</p>
            <img src={require(`../static/products/${val.sku}_1.jpg`)}/>
          </div>
          )
        }
      )
      
    return (
        <div>
        <h1>Product component</h1>
        <h1>Total product(s) : {this.showProduct(this.props.sizeparam).count}</h1>
        <h1>Shirts : {disp_product}</h1>
        
        {/* <h1>{disp_product}</h1> */}
      </div>
    );
  }
}

export default Products;
