import { useState } from 'react';

import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import { CartContext } from './components/store/Shopping-Cart-context.jsx';
import CartContextProvider from './components/store/Shopping-Cart-context.jsx';

function App() {


  return (

    <CartContextProvider >

    <Header />
     
      <Shop  >
        {
          DUMMY_PRODUCTS.map((product) => {
            return (
              <Product key={product.id} {...product} />
            )
          })
        }

        
      </Shop>
     </CartContextProvider>
      )

  }

      export default App;
