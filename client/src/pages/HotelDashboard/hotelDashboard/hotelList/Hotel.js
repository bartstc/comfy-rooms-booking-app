import React, {useState} from 'react';
import { Container, Title, Info, Description } from './Hotel.styles';
import Rooms from './hotel/Rooms';
import AddRoom from './hotel/AddRoom';

const initState = {
  facilities: [],
  price: '',
  adults: '1',
  children: '0'
};

const Hotel = () => {
  const [state, setState] = useState(initState);
  const [open, setOpen] = useState(false);

  const onFilter = (facilities, category) => setState({ ...state, facilities });

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(state);
    onClickClose();
    setState(initState);
  };

  const onClickOpen = () => setOpen(true);

  const onClickClose = () => setOpen(false);

  return (
    <Container>
      <Title>Triple Estate Hotel</Title>
      <Description>
        <Info>Handle: <span>tripleestatehotel</span></Info>
        <Info>Type: <span>Apartament</span></Info>
        <Info>Stars: <span>5</span></Info>
        <Info>city: <span>Amsterdam</span></Info>
      </Description>
      <Rooms />
      <AddRoom 
         open={open}
          handleClickOpen={onClickOpen}
          handleClickClose={onClickClose}
          handleChange={onChange}
          handleSubmit={onSubmit}
          values={state}
          handleFilter={onFilter}
      />
    </Container>
  );
};

export default Hotel;