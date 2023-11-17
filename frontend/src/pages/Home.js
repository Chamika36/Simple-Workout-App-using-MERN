import { useEffect, useState } from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/Workoutform';

const Home = () => {
    // const[workouts, setWorkouts]  = useState(null)
    const { workouts,dispatch} = useWorkoutContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout')
            const json = await response.json()

            if(response.ok){
                // setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    },[])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    );
}

export default Home;