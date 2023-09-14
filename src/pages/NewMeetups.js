import NewMeetupForm from "../components/meetups/MeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupsPage() {
    const history=useNavigate();

    function addMeetupHandler(meetupData) {
        console.log(meetupData);
        //firebase reqiures the .json
        fetch('https://ss-test-bb51e-default-rtdb.firebaseio.com/meetups.json', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meetupData)
        }).then(()=>{
            history("/", {replace: true});
        }
        );
    }

    return (
        <div>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>);
}
//https://console.firebase.google.com/project/ss-test-bb51e/database/ss-test-bb51e-default-rtdb/data/~2F
export default NewMeetupsPage;
