### NOTES REGARDING SYNCHRONOUS ACTION CREATORS & ASYNC AWAIT ###
1. Action creators must reurn plain js objects that have type and payload
Gives Actions must be plain objects objects; use custome mw for async actions error
when it is compiled to ES2015 code by Babel returns a long thing b/c it has async/await; didn't return a plain obj; returned a request object becauseof async/await 


export const fetchPosts = async () => {
   const res = await jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: res
    }

}


2. Get promise object back, not data 
won't work as expcted b/c by the time our action gets to a reducer, we won't have fetched our data!
export const fetchPosts =  () => {

    //make call to api; takes some time; what get returned/assigned to variable is a promise
    //Promise object is a little finger or handle, notification when request is completed in the future
   const promise = jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: promise
    }

}