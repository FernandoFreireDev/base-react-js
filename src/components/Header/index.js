import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header({ title, buttonTitle, buttonLink, Icon }) {
  return (
    <Container>
      <h3>{title}</h3>
      {buttonTitle && buttonLink && (
        <Link to={buttonLink}>
          <Button variant="primary">
            <span>
              {Icon && <Icon />}
              {buttonTitle}
            </span>
          </Button>
        </Link>
      )}
    </Container>
  );
}

export default Header;
