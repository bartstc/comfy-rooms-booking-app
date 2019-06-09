import React from 'react';
import { Choice, Title, Subtitle } from './SelectRole.styles';
import Button from '../../Button/Button';

const SelectRole = () => {
  return (
    <>
      <Title>Choose the type of account</Title>
      <Choice>
        <Subtitle>I want to create a standard account that allows searching and booking selected offers.</Subtitle>
        <Button>Create</Button>
      </Choice>
      <Choice>
        <Subtitle>I want to create a special account that allows you to add your own hotel offers and access the management panel.
        <br />
          <span>Requires acceptance by the admin!</span>
        </Subtitle>
        <Button>Create</Button>
      </Choice>
    </>
  );
};

export default SelectRole;