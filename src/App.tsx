import React from 'react';
import {Product} from "./components/Product";
import {useProduct} from "./hooks/useProduct";
import {Loader} from "./components/Loader";
import {Error} from "./components/Error";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";

function App() {

  const {loader, error, products} = useProduct();

  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loader && <Loader /> }
      { error && <Error error={error}/> }
      { products.map(product => <Product product={product} key={product.id}/>) }

        <Modal title='Create new product'>
            <CreateProduct />
        </Modal>
    </div>
  );
}

export default App;
