import Form from './components/form.jsx';
import Main from './components/main.jsx';
import { asyncRequestStore } from './asyncActions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  async function getData(e) {
    e.preventDefault;
    const input = e.target;
    if (e.key === 'Enter' && e.key !== '') {
      dispatch(asyncRequestStore(input.value));
    }
  }

  return (
    <div className="weather">
      <Form getData={getData}></Form>
      <Main></Main>
    </div>
  );
}

export default App;
