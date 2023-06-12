import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = () => {
    const updatedFavorites = [...favorites];
    if (!updatedFavorites.some((favorite) => favorite.id === id)) {
      updatedFavorites.push(user);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (userId) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== userId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  if (!user) {
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" align="center">
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        User Details
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary={`Name: ${user.name}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Username: ${user.username}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Email: ${user.email}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Phone: ${user.phone}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Address"
            secondary={`Street: ${user.address.street}, Suite: ${user.address.suite}, City: ${user.address.city}, Zip Code: ${user.address.zipcode}`}
          />
        </ListItem>
      </List>
      <Button variant="contained" color="primary" onClick={addToFavorites}>
        Add to Favorites
      </Button>
      <Button variant="contained" onClick={toggleFavorites}>
        Favorites
      </Button>
      {showFavorites && favorites.length > 0 && (
        <div>
          <Typography variant="h6" align="center" gutterBottom>
            Favorites:
          </Typography>
          <List>
            {favorites.map((favorite) => (
              <ListItem key={favorite.id}>
                <ListItemText primary={favorite.name} />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromFavorites(favorite.id)}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </Container>
  );
}

export default Profile;
