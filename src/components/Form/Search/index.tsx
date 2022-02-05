import React, { useState } from 'react';
// import './styles.css';

// import { getContract } from '../../api/addContract';

/**
 * Note: Normally I use a library like `react-hook-form` for handling form data,
 * but in this case I use a simple stateful approach for minimalism and less dependencies
 **/

interface Props {
  title?: string;
  setContracts: (contracts: any) => void;
}

const SearchForm = ({ title, setContracts }: Props) => {
  // Initialize form data
  const [id, setId] = useState(0);

  const handleOnSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    if (!id) {
      alert('Id is missing');
      return;
    }

    /**
     * const foundContract = await getContract(id);
     */

  //  const newContract = foundContract || {};
  //  setContracts((prev: any) => ([ ...prev, newContract]));
    // console.log('data => ', data);
  };

  return (
    <div className="form">
      <h2 className='form__title'>{title}</h2>
      <form className="form__container row" action="POST" onSubmit={handleOnSubmit}>
        <input
          className="input"
          type="number"
          name="id"
          placeholder="1"
          required
          value={id}
          onChange={(e) => console.log(e)} // e.target.value
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default SearchForm;
