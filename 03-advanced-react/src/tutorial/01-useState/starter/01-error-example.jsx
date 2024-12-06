const ErrorExample = () => {
  let count = 0;

  const incrementClick = () => {
    count++;
    console.log(count);
  }

  const decrementClick = () => {
    count--;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={incrementClick}>
        Increase
      </button>
      <button type="button" onClick={decrementClick}>
        Decrease
      </button>
    </div>
  )
};

export default ErrorExample;
