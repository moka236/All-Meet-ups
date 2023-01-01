import { useHistory } from 'react-router-dom';
import NewMeetupform from "../components/meetups/NewMeetupform";

function NEWMeetupPage() {
    const history = useHistory();
    function AddMeetupHandler(meetupdata) {
        fetch('https://meet-up-demo-252e6-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupdata),
            headers: {
                'Content-Type':'application/json'
            }
        }
        ).then(()=> {
            history.replace('/')
        });
    }
    return <section>
        <h1>ADD New Meetup</h1>
        <NewMeetupform onAddMeetup={AddMeetupHandler}/>
    </section>;
}
export default NEWMeetupPage;