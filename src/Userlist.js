import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText,  Card, CardContent } from '@mui/material';
import Profile from './Profile';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const sortedUsers = response.data.sort((a, b) => a.name.localeCompare(b.name));
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>

   

<Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id} disablePadding>
            <Link to={`/user/${user.id}`} style={{ textDecoration: 'none', width: '100%' }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" component="div" gutterBottom>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Username: {user.username}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Phone: {user.phone}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>


    </>

  );
}



export default UserList;
