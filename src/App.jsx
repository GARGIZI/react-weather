import Form from './components/form.jsx';
import Main from './components/main.jsx';
import sendRequest from './sendRequest.js';
import { useState } from 'react';

function App() {
  const [data, useData] = useState({});

  async function getData(e) {
    e.preventDefault;
    const input = e.target;
    if (e.key === 'Enter' && e.key !== '') {
      const request = sendRequest(input.value);
      const data = await (await request).json();
      input.parentElement.reset();
      useData(data);
    }
  }

  return (
    <div className="weather">
      <Form getData={getData}></Form>
      <Main data={data} useData={useData}></Main>
    </div>
  );
}

export default App;
