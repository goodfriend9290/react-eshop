import PropTypes from 'prop-types';
import React from 'react';
import './MiniCart.scss';
import { useAppState } from '../../../../../lib/context/app';
import { get } from '../../../../../lib/util/get';
import Bag from '@heroicons/react/outline/ShoppingBagIcon';

export default function MiniCart({ cartUrl, cart }) {
  const miniCart = get(useAppState(), 'cart', cart || {});

  return (
    <div className="mini-cart-wrapper self-center">
      <a className="mini-cart-icon" href={cartUrl}>
        <Bag width={20} height={20} />
        {(miniCart.totalQty > 0) && <span>{miniCart.totalQty}</span>}
      </a>
    </div>
  );
}

MiniCart.propTypes = {
  cartUrl: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'icon-wrapper',
  sortOrder: 10
}

export const query = `
  query Query {
    cartUrl: url(routeId: "cart"),
    cart(id: getContextValue("cartId", null)) {
      totalQty
    }
  }
`;
