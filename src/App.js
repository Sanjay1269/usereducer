import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import MyCounter from './Components/MyCounter';
import Counter2 from './Components/Counter2';
import PostList from './Components/PostList';
import { CountProvider } from './context-api/CountContext';
import ComponentA from './Components/ComponentA';

const initialState = 0

const reducer = (state, action) => {
  console.log('state : ', state);
  console.log('action:', action);
  if (action === 'increment') {
    return state + 10
  } else if (action === 'decrement') {
    return state - 10
  } else if (action === 'reset') {
    return initialState
  }
  return state
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountProvider
    value={{
      count : state,
      dispatch : dispatch
    }}>
    <div className="App">
      <p>This is for primitive type</p>
      <p>state : {state}</p>
      <button onClick={() => {
        dispatch('increment')
      }}>increment</button>

      <button onClick={() => {
        dispatch('decrement')
      }}>decrement</button>

      <button onClick={() => {
        dispatch('reset')
      }}>reset</button>
      <br />
      <br />
      <hr />
      <p>This is for refrance type</p>
      <MyCounter />
      <br />
      <br />
      <hr />
      <Counter2/>
      <br/>
      <br/>
      <hr/>
      {/* <PostList/> */}
      <br/>
      <br/>
      <hr/>
      <ComponentA/>
    </div>
    </CountProvider>
  );
}

export default App;
