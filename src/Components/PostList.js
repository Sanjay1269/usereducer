import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: false,
    data: [],
    err: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        case 'FETCH_FAILED':
            return {
                ...state,
                loading: false,
                data: [],
                err: action.payload
            }
        default: return state
    }
}

function PostList() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchPost()
    }, []);

    const fetchPost = async () => {
        try {
            dispatch({
                type: 'LOADING',
                payload: true
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: response.data,
            })
        } catch (err) {
            dispatch({
                type: 'FETCH_FAILED',
                payload: err.message
            })
        }
    }

    if (state.loading) {
        return <p>Loading.....</p>
    }
    if (state.err) {
        return <p>{state.err}</p>
    }
    return (<div>
        {state.data.map((post) => {
            return <p key={post.id}>Title - {post.title}</p>
        })}
    </div>
    )
}

export default PostList;
