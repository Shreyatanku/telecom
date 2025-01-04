// src/components/feedback/FeedbackForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useFeedback } from '../../hooks/useFeedback';
import useStyles from '../../styles/Feedback.module.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const { submitFeedback } = useFeedback();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitFeedback(feedback);
    setFeedback('');
  };

  return (
    <Box className={useStyles.form}>
      <Typography variant="h5" component="h1" gutterBottom>
        Submit Feedback
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Feedback"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FeedbackForm;