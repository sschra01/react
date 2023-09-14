import { useRef } from 'react';

import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const locationInputRef = useRef();
  const imageInputRef = useRef();

    
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value.trim();
    const enteredDescription = descriptionInputRef.current.value.trim();
    const enteredLocation = locationInputRef.current.value.trim();
    const enteredImage = imageInputRef.current.value.trim();

    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredLocation,
        description: enteredDescription
      }
      //https://console.firebase.google.com/project/ss-test-bb51e/database/ss-test-bb51e-default-rtdb/data/~2F
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={locationInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;