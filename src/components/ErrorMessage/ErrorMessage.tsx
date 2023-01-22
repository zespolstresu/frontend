import React from 'react';
import { Error } from './ErrorMessage.styles';
import { IErrorMessage } from './ErrorMessage.types';
const ErrorMessage = ({value}: IErrorMessage): JSX.Element => (
  <Error variant='body1'>{value}</Error>
);

export default ErrorMessage;