import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import postStyles from "./postStyles";
import moment from "moment";

function Post({ post }) {
  console.log("Selected file:", post.selectedFile);

  return (
    <Card sx={postStyles.card}>
      <CardMedia
        sx={postStyles.media}
        image={post.selectedFile}
        title={post.title}

      />
      <div sx={postStyles.overlay}>
        <Typography variant='h6'> {post.creator}</Typography>
        <Typography variant='body2'>
          {" "}
          {moment(post.createdAt).fromNow()}{" "}
        </Typography>
      </div>
      <div sx={postStyles.overlay2}>
        <Button style={{ color: "white" }} size='small' onClick={() => {}}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div sx={postStyles.details}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}{" "}
        </Typography>
      </div>
      <CardContent>
        <Typography sx={postStyles.title} variant='h5' gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions sx={postStyles.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAlt fontSize='small' />
          Like
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;