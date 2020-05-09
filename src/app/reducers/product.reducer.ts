import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Product } from '../models/product';
import { ProductActions, ProductActionTypes } from '../state/product.actions';

export interface ProductState {
    showProductCode: boolean;
    products: Product[];
    currentProduct: Product;
}

const initState: ProductState = {
    showProductCode: true,
    products: [],
    currentProduct: null
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');
export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);
export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

// export const getCurrentProduct = createSelector(
//     getProductFeatureState,
//     getCurrentProductId,
//     (state, id) => state.products.filter(p => p.id === id)
// );

export function productReducer(state: ProductState = initState, action: ProductActions): ProductState {
    switch (action.type) {
        case ProductActionTypes.ToggleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            };
        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProduct: action.payload
            };
        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProduct: null
            };
        case ProductActionTypes.InitiateCurrentProduct:
            return {
                ...state,
                currentProduct: {
                    id: 0,
                    name: '',
                    code: 'New',
                    description: '',
                    starRating: 0
                }
            };
        default:
            return state;
    }
}
