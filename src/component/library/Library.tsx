import { WorkoutType } from "@/types/WorkoutType"
import WorkoutsCard from "./WorkoutsCard"

const getData = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
        {
            cache: "force-cache",
        }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch workouts")
    }

    return res.json()
}

const Library = async () => {
    const workoutsData: WorkoutType[] = await getData()

    return (
        <section className="bg-slate-900">
            <div
                className="
                    container mx-auto
                    px-4 sm:px-6 lg:px-8
                    py-10 sm:py-14 lg:py-20
                "
            >
                {/* Header */}
                <div>
                    <h1
                        className="
                            font-extrabold
                            text-xl
                            sm:text-2xl
                            text-white
                        "
                    >
                        THE LIBRARY
                    </h1>

                    <p
                        className="
                            font-normal
                            text-sm
                            sm:text-[14px]
                            text-gray-400
                            mt-1
                        "
                    >
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                {/* Workout Grid */}
                <div
                    className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-5
                        sm:gap-6
                        lg:gap-8
                        my-6
                        sm:my-8
                    "
                >
                    {workoutsData.map((workout: WorkoutType) => (
                        <WorkoutsCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Library

