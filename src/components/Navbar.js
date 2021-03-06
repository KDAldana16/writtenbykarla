
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';


function Navbar(props) {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, [])
  return (
    <header>
      <nav>
        <h2>WrittenbyKarla</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/recommendations">Recommendations</Link></li>
          <li className="cart"><Link to="/cart">
            <ion-icon name="basket-outline"></ion-icon>Cart  <span>{props.basketProps.basketNumbers}</span>
          </Link></li>
        </ul>
      </nav>
    </header>
  )
}

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);
