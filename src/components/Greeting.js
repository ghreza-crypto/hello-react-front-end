import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetingSlice';

function Greeting() {
  const { greeting, isLoading, hasError } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (isLoading) {
    return (<h2>Loading...</h2>);
  }

  if (hasError) {
    return (<h2>Something went wrong!</h2>);
  }

  return (
    <h1>{greeting.message}</h1>
  );
}

export default Greeting;