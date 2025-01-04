// src/pages/Auth/RegisterPage.js
import React from 'react';
import { Container, Box, Paper } from '@mui/material';
import RegisterForm from '../../components/forms/RegisterForm';
import useStyles from '../../styles/Auth.module.css';

const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <Box className={useStyles.page}>
        <Paper elevation={3} className={useStyles.paper}>
          <RegisterForm />
        </Paper>
      </Box>
    </Container>
  );
};

export default RegisterPage;