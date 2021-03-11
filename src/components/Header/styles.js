import styled from 'styled-components';
import { Container as ContainerComponent } from 'react-bootstrap';

export const Container = styled(ContainerComponent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;

  > h3 {
    font-weight: 600;
  }

  > a > button > span {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 5px;
    }
  }
`;
