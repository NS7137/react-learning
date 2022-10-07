import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  // 会遇到 某个遍历对象属性 为 undefined
  const url = image && image.url;
  return (
    <article className='product'>
      {/* <h4>single product</h4> */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name || 'default name'}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

// 用于检查接收的数据 类型
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
// 定义 默认值
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage
// };

export default Product;
