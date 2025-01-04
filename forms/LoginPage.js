// src/pages/Auth/LoginPage.js
import React from 'react';
import { Container, Box, Paper } from '@mui/material';
import LoginForm from '../../components/forms/LoginForm';
import useStyles from '../../styles/Auth.module.css';

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Box className={useStyles.page}>
        <Paper elevation={3} className={useStyles.paper}>
          <LoginForm />
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;