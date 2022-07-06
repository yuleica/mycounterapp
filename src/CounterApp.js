import React from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({valor}) => {

  const [ counter, setCounter ] = React.useState(valor)

    const handleAdd = () => {
      setCounter(counter+1)

    };

    const handleRest = () => {
      setCounter(counter-1)

    };

    const handleReset = () => {
      setCounter(valor)

    };

  return (
    <div>
        <h1>Counter App</h1>
        <h2>{counter}</h2>

        <button
            onClick={handleAdd}
            >+1
        </button>
        <button
            onClick={handleRest}
            >-1
        </button>
        <button
            onClick={handleReset}
            >Reset
        </button>
        
    </div>
  )

  CounterApp.propTypes = {
      valor: PropTypes.number.isRequired
  };
};


