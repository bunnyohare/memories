import { makeStyles } from "@mui/styles";

const postsStyles = (theme) => {
  ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: theme.spacing(1), // Adjust the margin value as needed
  },
    actionDiv: {
      textAlign: 'center',
    },
  })
};

export default postsStyles;