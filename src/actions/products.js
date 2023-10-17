export function productsFetchData(url) {
    return async (dispatch) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const products = await response.json();
            dispatch(productsFetchDataSuccess(products));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
}

export function productsFetchDataSuccess(products) {
    return {
        type: "PRODUCTS_FETCH_DATA_SUCCESS",
        products
    };
}