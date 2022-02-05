import React, { useState } from 'react';
import '../styles.css';

// import { addContract } from '../../api/addContract';

/**
 * Note: Normally I use a library like `react-hook-form` for handling form data,
 * but in this case I use a simple stateful approach for minimalism and less dependencies
 **/

interface Props {
  title?: string;
  setContracts: (contracts: any) => void;
}

const Form = ({ title, setContracts }: Props) => {
  // Initialize form data
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    startData: '',
    cancelationDate: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleOnSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    if (!data?.firstName || !data?.lastName || !data?.email) {
      alert('Form is not complete!');
      return;
    }

  /**
   * const newContract = await addContract(data);
   */

   const newContract = data;
   setContracts((prev: any) => ([ ...prev, newContract]));
    // console.log('data => ', data);
  };

  return (
    <div className="form">
      <h2 className='form__title'>{title}</h2>
      <form className="form__container" action="POST" onSubmit={handleOnSubmit}>
        <input
          className="input"
          type="text"
          name="firstName"
          placeholder="First name"
          required
          value={data?.firstName}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input"
          type="text"
          name="lastName"
          placeholder="Last name"
          required
          value={data?.lastName}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input"
          type="text"
          name="email"
          placeholder="Email"
          required
          value={data?.email}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input"
          type="date"
          name="startData"
          placeholder="Start date"
          value={data?.startData}
          max={data?.cancelationDate}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input"
          type="date"
          name="cancelationDate"
          placeholder="Cancelation date"
          value={data?.cancelationDate}
          min={data?.startData}
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
