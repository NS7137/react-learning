import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders

const calculateMostExpensive = data => {
  console.log('hello');
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // 2.对于函数用到的state，只与此函数相关，不发生改变时，组件不重新渲染
  const addToCart = useCallback(() => {
    setCart(cart => cart + 1);
  }, []);

  // 3 同样 计算属性 , 与结果相关的变量没有改变，结果值就不会改变，不会触发渲染
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// 1.  React.memo() 将组件包裹，只要组件关联的props or state不发生改变，component就不会re-render
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('BigList called');
  });
  return (
    <section className='products'>
      {products.map(product => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('SingleProduct called');
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add</button>
    </article>
  );
};
export default Index;
