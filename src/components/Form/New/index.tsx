import React, { useState } from 'react';
import '../styles.css';

import { addContract } from '../../../api/addContract';

/**
 * Note: Normally I use a library like `react-hook-form` for handling form data,
 * but in this case I use a simple stateful approach for minimalism and less dependencies
 **/

interface Props {
  title?: string;
  setContracts: (contracts: any) => void;
}

const Form = ({ title, setContracts }: Props) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    startDate: '',
    cancellationDate: '',
    status: 'ok'
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const uploadNewContract = async (data: any) => {
    const newContract = await addContract(data);
    setContracts((prev: any) => ([ ...prev, newContract?.data]));
  };

  const handleOnSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();

    if (!data?.firstName || !data?.lastName || !data?.email) {
      alert('Form is not complete!');
      return;
    }

    uploadNewContract(data);
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
          name="startDate"
          placeholder="Start date"
          value={data?.startDate}
          max={data?.cancellationDate}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input"
          type="date"
          name="cancellationDate"
          placeholder="cancellation date"
          value={data?.cancellationDate}
          min={data?.startDate}
          onChange={(e) => onChange(e)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
