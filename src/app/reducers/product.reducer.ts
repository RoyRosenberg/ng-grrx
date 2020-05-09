import { Product } from '../models/product';

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
