import { Action } from '@ngrx/store';

import { Product } from '../models/product';


export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitiateCurrentProduct = '[Product] Initiate Current Product'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;

    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;

    constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitiateCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitiateCurrentProduct;
}

export type ProductActions = ToggleProductCode | SetCurrentProduct
    | ClearCurrentProduct
    | InitiateCurrentProduct;
