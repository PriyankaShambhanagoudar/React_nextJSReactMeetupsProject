import MeetupList from "./../components/meetups/MeetupList";

const DUMMY_MEETUP = [
    {
        id: "m1",
        title: "A First Meetup",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "some addess 5, 12345 Some City",
        description: "This is a first meetup!",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "some addess 5, 12345 Some City",
        description: "This is a Second meetup!",
    },
];

function HomePage(props) {
    //  const [loadedMeetups, setLoadedMeetups] = useState([])
    // useEffect(() => {
    //     // send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUP)
    // }, [])
    return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUP,
//         },
//     };
// }

export async function getStaticProps() {
    //fetch data from an API

    return {
        props: {
            meetups: DUMMY_MEETUP,
        },
        revalidate: 1
    };
}
export default HomePage;
