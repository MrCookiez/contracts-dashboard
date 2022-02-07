import React, { useState, useCallback } from 'react';
import './styles.css';
import { getContract } from '../../../api/getContract';

/**
 * Note: Normally I use a library like `react-hook-form` for handling form data,
 * but in this case I use a simple stateful approach for minimalism and less dependencies
 **/

interface Props {
  title?: string;
  setContract: (contract: any) => void;
}

const SearchForm = ({ title, setContract }: Props) => {
  const [id, setId] = useState(0);

  const findContractById = useCallback(async () => {
    const res = await getContract(id);

    if (res?.data && !res?.loading) {
      setContract(res?.data);
      return;
    }

    setContract('Not found');

  }, [id, setContract]);

  const handleOnSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    if (!id) { alert('ID is missing'); return; }

    findContractById();
  };

  return (
    <div className="form">
      <h2 className='form__title'>{title}</h2>
      <form className="form__container row" action="POST" onSubmit={handleOnSubmit}>
        <label className="label" htmlFor="id">ID:</label>
        <input
          id="id"
          className="input"
          type="number"
          name="id"
          required
          min="1"
          defaultValue={id}
          onChange={(e) => setId(+e.target.value)}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default SearchForm;
