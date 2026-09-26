
import { WorkoutType } from "@/types/WorkoutType";
import AaddTodayPlan from "../button/AaddTodayPlan";

type WorkoutDetailsCardProps = {
  workout: WorkoutType;
};


const WorkoutDetailCard = ({ workout }: WorkoutDetailsCardProps) => {
  return (
    <div className="bg-slate-900 p-10 text-white">
    <div className="container mx-auto bg-slate-500 card lg:card-side overflow-hidden rounded-3xl border border-base-300 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

      {/* Image */}
      <figure className="relative lg:w-1/2">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full min-h-[380px] w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Image gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Difficulty */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/30 bg-black/50 px-4 py-2 text-sm font-semibold text-white">
            {workout.difficulty}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl text-yellow-400">★</span>
            <span className="font-bold">{workout.rating}</span>
            <span className="text-sm text-white/70">/ 5</span>
          </div>
        </div>
      </figure>

      {/* Content */}
      <div className="card-body justify-center p-6 lg:p-8">

        {/* Heading */}
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Workout Details
          </p>

          <h2 className="card-title text-3xl font-extrabold tracking-tight lg:text-4xl">
            {workout.name}
          </h2>
        </div>

        {/* Description */}
        <p className="mt-2 text-black">
          {workout.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

          <div className="rounded-2xl border border-base-300 bg-base-200 p-3 text-center">
            <p className="text-xl font-bold text-primary">
              {workout.duration}
            </p>
            <p className="text-xs text-base-content/60">
              Minutes
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-200 p-3 text-center">
            <p className="text-xl font-bold text-primary">
              {workout.caloriesBurned}
            </p>
            <p className="text-xs text-base-content/60">
              Calories
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-200 p-3 text-center">
            <p className="text-xl font-bold text-primary">
              {workout.sets}
            </p>
            <p className="text-xs text-base-content/60">
              Sets
            </p>
          </div>

          <div className="rounded-2xl border border-base-300 bg-base-200 p-3 text-center">
            <p className="text-xl font-bold text-primary">
              {workout.reps}
            </p>
            <p className="text-xs text-base-content/60">
              Reps
            </p>
          </div>

        </div>

        {/* Muscle Groups */}
        <div className="mt-4">
          <p className="mb-2 text-sm font-bold">
            Muscle Groups
          </p>

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
              >
                {muscle}
              </span>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div className="mt-3">
          <span className="text-lg font-bold">
            Equipment:
          </span>{" "}
          <span className="text-primary text-lg">
            {workout.equipment}
          </span>
        </div>

        {/* Instructions */}
        <div className="mt-4">
          <p className="mb-2 text-lg font-bold">
            How to Perform
          </p>

          <ol className="space-y-1.5 text-sm text-white">
            {workout.instructions.slice(0, 3).map((instruction, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-bold text-primary">
                  {index + 1}.
                </span>

                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Button */}
        <div className="card-actions mt-5 justify-end">
          <AaddTodayPlan workout={workout}/>
          <button className="btn btn-primary rounded-xl px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
            save for later
          </button>
        </div>

      </div>
    </div>
    </div>
  );
};

export default WorkoutDetailCard;


