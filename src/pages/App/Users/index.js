import React from 'react';
import { BsPersonPlusFill } from 'react-icons/bs';

import { NavBar, Header } from '@/components/index';
import { Container } from './styles';

function Users(props) {
  const path = props.match.url;

  return (
    <div>
      <NavBar />
      <Container>
        <Header
          title="Usuários"
          buttonTitle="Adicionar usuários"
          buttonLink={`${path}/add`}
          Icon={BsPersonPlusFill}
        />
      </Container>
    </div>
  );
}

export default Users;
