import { WorkoutType } from "@/types/WorkoutType";
import WorkoutsCard from "./WorkoutsCard";

const getData=async()=>{
    const res =await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}
const Library = async() => {
    const workoutsData =await getData();
    
  return (
    <div className="container mx-auto">
        <div>
            <h1 className="font-extrabold text-2xl text-white">THE LIBRARY</h1>
            <p className="font-normal text-[14px] text-gray-400">Twelve lifts covering every major muscle group.</p>
        </div>
        <div className="grid grid-cols-3 gap-10 my-8">
            {workoutsData.map((workout:WorkoutType)=><WorkoutsCard key={workout.id} workout={workout}/>)}
        </div>
    </div>
  )
}

export default Library