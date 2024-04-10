import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import postStyles from './postsStyles'
import { Grid, CircularProgress } from '@mui/material';


function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid sx={postStyles.mainContainer} container alignItems="stretch">
        { posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} >
            <Post post={post} />
            </Grid>

        ))}

      </Grid>
    )

  )
}

export default Posts