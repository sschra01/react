import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from'react';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMmeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://ss-test-bb51e-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });

  }, []);
//no external dependency to fetch data from the server


  //needed because the fetch is asynchronous and returns a promise
  //however, the react components are synchronous so we need to return a value
  if (isLoading) {
    return (
      <section><p>Loading ...</p></section>
    )
    } else {
      return (
        <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMmeetups} />
      </section>
    );
  }
}

export default AllMeetupsPage;
