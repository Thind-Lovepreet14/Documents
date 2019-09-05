/* ProductsPage is the Parent component */

import React from 'react';

class ProductsPage extends React.Component {
    render() {
        return (
            <ProductHero />
        )
    }
}

class ProductHero extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <section className="container-fluid hero">
                        <div className="hero-product">
                            <h1>Our <span className="yellow-text">Stock</span></h1>     
                        </div>
                    </section>
                    
                </div>
                <ProductDataList />
            </div>
        )
    }
}

class ProductFilter extends React.Component {

    constructor() {
        super();
        this.handleFormInput = this.handleFormInput.bind(this);
        this.state = {
            gender: 0
        }
    }

    handleFormInput(gender) {
        this.setState({
            gender: gender
        
        })
    }

    render() {
        return (
            <div className="filter">
                <ProductFilterMenu 
                    gender={this.props.gender}
                    onFormInput={this.handleFormInput}
                />
                <ProductFilterResults
                    products={this.props.products}
                    gender={this.props.gender}
                />
            </div>
        );
    }
}

class ProductFilterResults extends React.Component {

    render() {
      const products = this.props.products;
      const results = [];
        
      products.map((product) => {
        if (this.props.gender === 0 || this.props.gender === 'All Products') {
          results.push(<Product product={product} />);
        }
        else if (product.gender === this.props.gender) {
          results.push(<Product product={product} />);
        }   
      });
          
      return (
        <div className="filter-results">
            <div className="blocks blocks_3up row">
                {results}
            </div>
        </div>
      ) 
    }
}

class ProductDataList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            productsList: []
        };
    }

    componentDidMount() {
        fetch('./data/products.json')
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        productsList: data.products
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                });
            


    }
    render() {
        const { error, isLoaded, productsList } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ProductFilter products={productsList} />
            );
        }
    }
}


class Product extends React.Component {

    render () {
      const product = this.props.product;

      return (
        <div key="product.name" className="col-md-3 product-column">
            <img className="img-fluid" src={product.imageSource} alt={product.name} />
            <p className="text-left">
                <span className="product-title">{product.name}</span> 
                <span className="product-price">{product.price}</span>
                <span className="d-block item-description">{product.category}</span>
            </p>
        </div>
      )
    }
}   

class ProductFilterMenu extends React.Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange() {
      this.props.onFormInput (
        this.refs['genderInput'].getDOMNode().value,
      );
    }
    
    render() {
      return (
        <form className="filter-menu">
          <label for="genderInput">Filter By Gender</label>
          <select id="genderInput" ref="genderInput" onChange={this.handleChange}>
            <option value="All Products">All Products</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </form>
      );
    }
}


export default ProductsPage;