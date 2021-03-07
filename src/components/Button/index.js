import React from 'react';

import { Container } from './styles';

function Button({ Icon, title }) {
  return (
    <Container>
      <Icon />
      {title && <p>{title}</p>}
    </Container>
  );
}

export default Button;
