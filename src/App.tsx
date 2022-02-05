import { useState, useEffect, useCallback } from 'react';
import { Container, Sidebar, Form } from './components';
import { getContracts } from './api';

const  App = () => {
  const [contracts, setContracts] = useState([]);
  const [contract, setContract] = useState({});

  // const fetchAllContracts = useCallback(async () => {
  //   const res = await getContracts();
  //   setContracts(res?.data)
  // }, []);

  // useEffect(() => {
  //   fetchAllContracts();
  // }, []);

  console.log('contracts => ', contracts);

  return (
    <div className='app'>
      <Sidebar title="Dashboard">
        <Form.Search title='Find contract by id' setContracts={setContracts} />
        <Form.New title='new contract' setContracts={setContracts} />
      </Sidebar>

      <div className="main">
        {/* <Container title="Result:">
          <div>foundContractById</div>
        </Container> */}

        {contracts.length > 0 && (
          <Container title="All contracts:">
            {contracts.map((contract: any, index) => (
              <div key={index.toString()}>
                {contract.firstName}
              </div>
            ))}
          </Container>
        )}
      </div>
    </div>
  );
};

export default App;
