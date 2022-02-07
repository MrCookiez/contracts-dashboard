import { useState, useEffect, useCallback } from 'react';
import { Container, Sidebar, Form, Banner, Table } from './components';
import { getContracts } from './api';

const  App = () => {
  const [contracts, setContracts] = useState([]);
  const [contract, setContract] = useState(null);

  const fetchAllContracts = useCallback(async () => {
    const res = await getContracts();
    setContracts(res?.data)
  }, []);

  useEffect(() => {
    fetchAllContracts();
  }, [fetchAllContracts]);

  return (
    <>
      <Banner />

      <div className='app'>
        <Sidebar>
          <Form.Search title='Find contract by id' setContract={setContract} />
          <Form.New title='new contract' setContracts={setContracts} />
        </Sidebar>

        <div className="main">
          {(contract !== 'Not found') && contract && (
            <Container className={contract ? 'found' : ''} title="found:">
              <Table contracts={[contract]} />
            </Container>
          )}

          {(contract === 'Not found') &&(
            <Container title="RESULTS:">
              <div>Not found</div>
            </Container>
          )}

          {contracts.length > 0 ? (
            <Container title="All contracts:">
              <Table contracts={contracts} />
            </Container>
          ) : (
            <Container title="All contracts:">
              <span>No contracts available...</span>
              <br />
              <span>- Please go ahead and add a new one</span>
            </Container>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
