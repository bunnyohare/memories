# Memories

This is currently a half done CRUD Redux app.

1. Change directory to the server folder. Run npm install 

2.  The Server side also needs a config folder that should contain a db.js file.  That file should contain something that looks like this:

```import mongoose from "mongoose";

const CONNECTION_URL =
  "mongodb+srv://MONGO_USERID:MONGO_PASSWORD@MONGO_DB_INFO.mongodb.net/?retryWrites=true&w=majority&appName=MONGO_DB_APP_NAME";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_URL);
    console.log(`connected to db`)
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB; 
```
    You can obtain your own connection url from your mongo db as a connection string

3. Run `npm start` to start your server
4. Open server in Chrome (or other browser) at http://localhost:5001/posts

4.Change directory to the client folder. 

5. Run `npm install --force`
6. Run `npm install @material-ui/core @mui/material` 
7. Run `npm install @emotion/react @emotion/styled @mui/icons-material --force`
8. Run `npm i react-redux --force`
9. Run `npm run dev`
 
