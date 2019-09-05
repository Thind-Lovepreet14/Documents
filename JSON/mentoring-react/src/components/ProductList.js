import React, { Component } from 'react';

class ProductList extends Component {

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
                <div class="container-fluid products-container"> 
                    <div class="row">
                        {productsList.map((product, index) => (
                            <div key="product.name" className="col-md-3 product-column">
                                {index}
                                <img className="img-fluid" src={product.imageSource} alt={product.name} />
                                <p className="text-left">
                                    <span className="product-title">{product.name}</span> 
                                    <span className="product-price">{product.price}</span>
                                    <span className="d-block item-description">{product.category}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}

export default ProductList;