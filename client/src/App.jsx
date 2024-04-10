import React, {useEffect , useState } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import memories from './images/memories.png'

import styles from './styles.js'
import postsStyles from './components/Posts/postsStyles.js'
import formStyles from  './components/Form/formStyles.js'

//imoprt axios from 'axios';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit' sx={styles.appBar}>
        <Typography variant='h2' align='center' sx={styles.heading}>Memories</Typography>
        <img sx={styles.image} src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts sx={postsStyles.mainContainer} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form sx={formStyles.root}/>
          </Grid>

        </Grid>
      </Grow>
    </Container>
  )
}

export default App