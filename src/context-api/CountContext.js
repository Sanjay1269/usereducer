import React from 'react';

const CountContext = React.createContext()
const CountProvider = CountContext.Provider
const CountConsumer = CountContext.Consumer

export default CountContext;
export {CountProvider,CountConsumer}
