import WorkoutDetailsCard from "@/component/library/WorkoutDetailsCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout = await res.json();

  return (
    <div>
        <WorkoutDetailsCard workout={workout} />
    </div>
  );
};

export default WorkoutDetailsPage;