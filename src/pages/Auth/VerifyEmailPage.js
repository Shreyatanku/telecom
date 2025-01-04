// src/pages/Auth/VerifyEmailPage.js
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Container, Box, Paper, Typography, CircularProgress } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import useStyles from '../../styles/Auth.module.css';

const VerifyEmailPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { verifyEmail } = useAuth();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');
  const classes = useStyles();

  useEffect(() => {
    const verify = async () => {
      const success = await verifyEmail(token);
      if (success) {
        history.push('/login');
      } else {
        // Handle verification failure
      }
    };
    verify();
  }, [token, verifyEmail, history]);

  return (
    <Container maxWidth="sm">
      <Box className={classes.page}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" component="h1" gutterBottom>
            Verifying Email...
          </Typography>
          <CircularProgress />
        </Paper>
      </Box>
    </Container>
  );
};

export default VerifyEmailPage;
