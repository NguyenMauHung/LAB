import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    // Set độ trễ : Sau khoảng thời gian 2s thì thực hiện hàm addDishes với tham số DISHES, đẩy DISHES vào store
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    //trả về kiểu type hành động DISHES_LOADING
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});