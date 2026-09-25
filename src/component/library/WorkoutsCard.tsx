import { WorkoutType } from "@/types/WorkoutType";


type WorkoutsCardProps = {
  workout: WorkoutType;
};

const WorkoutsCard = ({ workout }: WorkoutsCardProps) => {
  return (
    <div className="card bg-base-100 w-96 overflow-hidden border border-white/20 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <figure className="relative h-64 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Difficulty */}
        <div className="absolute right-4 top-4">
          <div
            className={`badge border-0 px-3 py-3 font-semibold text-white shadow-lg ${
              workout.difficulty === "Beginner"
                ? "bg-green-500/90"
                : workout.difficulty === "Intermediate"
                  ? "bg-orange-500/90"
                  : "bg-red-500/90"
            }`}
          >
            {workout.difficulty}
          </div>
        </div>

        {/* Workout name */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
            {workout.name}
          </h2>
        </div>
      </figure>

      <div className="card-body">
        {/* Rating + Duration */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-lg text-yellow-400">★</span>
            <span className="font-semibold">{workout.rating}</span>
          </div>

          <div className="badge badge-outline">
            ⏱ {workout.duration} min
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/70">
          {workout.description}
        </p>

        {/* Workout information */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-base-200/70 p-3">
            <p className="text-xs text-base-content/50">Calories</p>
            <p className="font-bold">{workout.caloriesBurned} kcal</p>
          </div>

          <div className="rounded-xl bg-base-200/70 p-3">
            <p className="text-xs text-base-content/50">Sets × Reps</p>
            <p className="font-bold">
              {workout.sets} × {workout.reps}
            </p>
          </div>
        </div>

        {/* Card actions */}
        <div className="card-actions justify-end pt-2">
          {workout.muscleGroups.map((muscle) => (
            <div
              key={muscle}
              className=" badge badge-outline border-primary/40 px-3 py-3"
            >
              {muscle}
            </div>
          ))}
        </div>

        {/* Equipment */}
        <div className="mt-1">
          <span className="text-xs text-base-content/50">
            Equipment:{" "}
          </span>
          <span className="text-xs font-medium">{workout.equipment}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutsCard;
