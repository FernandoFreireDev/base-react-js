import React from 'react';
import { IoMdMail, IoMdLock, IoIosLogIn } from 'react-icons/io';

import Logo from '@/assets/logo.png';
import { Container, Button, FieldGroup, Copyright, FlexGrow } from './styles';

function Login() {
  return (
    <Container>
      <div>
        <div>
          <FlexGrow />
          <img src={Logo} alt="logo" />
          <form action="#">
            <FieldGroup>
              <label htmlFor="email">Email</label>
              <div>
                <IoMdMail />
                <input type="text" id="email" />
              </div>
            </FieldGroup>
            <FieldGroup>
              <label htmlFor="password">Senha</label>
              <div>
                <IoMdLock />
                <input type="text" id="password" />
              </div>
            </FieldGroup>
            <Button type="submit">
              <IoIosLogIn />
              <span>Enviar</span>
            </Button>
          </form>
          <FlexGrow />
          <Copyright>
            <p>HigiClean Rio © 2021 | Todos os direitos reservados.</p>
            <p>Orgulhosamente desenvolvido por Agência Web Maker.</p>
          </Copyright>
        </div>
      </div>
    </Container>
  );
}

export default Login;
