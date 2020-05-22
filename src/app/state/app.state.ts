import { PostState } from '../reducers/post.reducer';
import { ProductState } from '../reducers/product.reducer';

export interface State {
    products: ProductState;
    posts: PostState;
    // user: any;
}
