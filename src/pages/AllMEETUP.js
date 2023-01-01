import {useState, useEffect} from "react";
import MeetupList from "../components/meetups/MeetupList";

function ALLMeetupPage() {
    const [isloading, setIsLoading]= useState(true) ;
    const [loadedMeetups, setLoadedMeetups ] =useState([]);

    useEffect(()=> {
        fetch('https://meet-up-demo-252e6-default-rtdb.firebaseio.com/meetups.json'
    ).then(Response => {
        return Response.json();
    }).then (data => {
        const meetups=[];
        for (const key in data) {
            const meetup ={
                id: key,
                ...data[key]
            };
            meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);

    });
    }, []);

    
    if (isloading) {
        return( <section>
            <p>loading...</p>
            </section>
        );
    }
    return 
    <section>
        <h1>AllMEETUP</h1>
        <MeetupList Meetup={loadedMeetups} />
        
    </section>;

}
export default ALLMeetupPage;