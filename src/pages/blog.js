import React, { useState, useEffect } from 'react';
import '../App.css';
import moment from 'moment';
import { Auth } from 'aws-amplify';

//UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import {useSnackbar} from 'notistack';

//END UI
import { API } from 'aws-amplify';
import { listNotes } from '../graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../graphql/mutations';

//USE STYLING
const useStyles = makeStyles({
  root: {
    width: 300,
    margin: 24,
    padding: 24

  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap'
  }
});

const initialFormState = { name: '', description: '' }
function Blog() {
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const classes = useStyles();
  const [user, setUser] = useState([null]);
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetchNotes();
    getUser();
  }, []);

  function getUser() {
    Auth.currentAuthenticatedUser({
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => setUser(user)
    )
      .catch(err => console.log(err));
  }
  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createNoteMutation, variables: { input: formData } });
    setNotes([...notes, formData]);
    setFormData(initialFormState);
    enqueueSnackbar('Succesfully added the note.', {variant: 'success'})
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
    enqueueSnackbar('You deleted the feature. Thanks for working on it.', {variant: 'error'});
  }
  function readUser(){
    if(user.username === 'barcaglobalservices'){
      setAdmin(true);
    }else{
      setAdmin(false);
    }
  }
  

  return (
    <>
     { admin ? <>
      <div className="addForm">
        <input
          onChange={e => setFormData({ ...formData, 'name': e.target.value })}
          placeholder="Feature"
          value={formData.name}
        />
        <TextareaAutosize className="input" aria-label="empty textarea" placeholder="Empty"
  
          onChange={e => setFormData({ ...formData, 'description': e.target.value })}
          value={formData.description}
        />
        <Button variant="outlined" color="primary" onClick={createNote}>Create Feature</Button>
    </div>
     </> : null }
     <Button onClick={() => readUser()} variant="outlined" color="secondary" >If Admin add feature</Button>
      <div style={{ marginBottom: 30 }} className={classes.card} >
        {
          notes.map(note => (
            <Card className={classes.root} key={note.id || note.name}>
              <CardContent>

                <Typography variant="h4" component="p">
                  {note.name}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {moment(note.createdAt).fromNow()}
                </Typography>

                <Typography variant="body2" component="p">
                  {note.description}

                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" color="secondary" onClick={() => deleteNote(note)}>Complete Feature</Button>
              </CardActions>
            </Card>


          ))
        }
      </div>
      </>
  );
 
}
 


export default Blog;