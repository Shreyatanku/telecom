// src/components/feedback/FeedbackList.js
import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useFeedback } from '../../hooks/useFeedback';
import useStyles from '../../styles/Feedback.module.css';

const FeedbackList = () => {
  const { feedbacks, fetchFeedbacks } = useFeedback();

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  return (
    <div className={useStyles.list}>
      <Typography variant="h5" component="h1" gutterBottom>
        Feedback List
      </Typography>
      <List>
        {feedbacks.map((feedback, index) => (
          <ListItem key={index}>
            <ListItemText primary={feedback.text} secondary={feedback.date} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default FeedbackList;