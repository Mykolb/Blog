//actions
import jsonPlaceholder from '../api/jsonPlaceholder';


//actions creator
//can you async/await with redux thunk b/c it is async; errors occur when you use it with synchronous
export const fetchPosts = () => 
        async dispatch => {
        const res = jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: res })
    }























