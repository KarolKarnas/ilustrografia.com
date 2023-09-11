import _ from 'lodash';
import { Product } from '../types/Product';

export const getVariation = (product: Product, material: string, size: string) => {
  // console.log(product)
  return _.find(product.variations, { options: { material, size } });
};