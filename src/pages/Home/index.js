import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/format";
import api from "../../services/api";

import * as CartActions from '../../store/modules/cart/actions'

class Home extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get("products");
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: response.data });
  }

  handleAddProduct = product => {
    const {addToCart} = this.props;

   addToCart(product);

  }
  render() {
    const { products } = this.state;
    const {amount} = this.props;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title} </strong>
            <span>{formatPrice(product.price)}</span>
            <button type="button" onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />{''}
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
const mapStateDispatchToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount ;
    return amount;
  }, {}),
})

const mapDispatchToProps = dispatch =>
bindActionCreators(CartActions, dispatch)

export default connect(mapStateDispatchToProps ,mapDispatchToProps)(Home);
