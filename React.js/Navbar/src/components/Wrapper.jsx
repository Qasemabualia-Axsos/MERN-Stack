import { useState } from 'react';
import { UserContext } from '../context/UserContext';
import Navbar from './Navbar';
import FormWrapper from './FormWrapper';

const Wrapper = () => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Navbar />
      <FormWrapper />
    </UserContext.Provider>
  );
};

export default Wrapper