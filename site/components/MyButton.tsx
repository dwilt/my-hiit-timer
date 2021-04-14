import styled, { css } from 'styled-components';
import { blue } from '../variables/colors';

export const MyButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive }) => (isActive ? blue : 'orange')};
  border-radius: 3px;
  border: none;
  color: white;
`;
