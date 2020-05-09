import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Product } from '../models/product';

export interface ProductState {
    showProductCode: boolean;
    products: Product[];
    currentProductId: number;
}

const initState: ProductState = {
    showProductCode: true,
    products: [],
    currentProductId: 0
};

const getProductFeatureState =  createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);
export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);
export const getCurrentProductId = createSelector(
    getProductFeatureState,
    state => state.currentProductId
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    getCurrentProductId,
    (state, id) => state.products.filter(p => p.id === id)
);

export function productReducer(state: ProductState = initState, action): ProductState {
    // console.log({ state, action });
    switch (action.type) {
        case 'TOGGLE_PRODUCT_CODE':
            return {
                ...state,
                showProductCode: action.payload
            };
        default:
            return state;
    }
}
