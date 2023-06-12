import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (userId) => {
    const updatedFavorites = favorites.filter((user) => user.id !== userId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Favorite Users
      </Typography>
      <List>
        {favorites.map((user) => (
          <ListItem key={user.id}>
            <ListItemText
              primary={`Name: ${user.name}`}
              
            />
            <Button variant="contained" color="secondary" onClick={() => removeFromFavorites(user.id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Favorites;
