import Typography from "../typography/Typography";
import { HomesCardProps } from "./@types";

export default function HomeCard({ ...props }: HomesCardProps) {
  return (
    <div className="shadow-2xl rounded-lg p-4 w-72 flex flex-col">
      <Typography variant="T_Medium_H5">{props.title}</Typography>
      <Typography variant="T_Regular_H6" className="text-gray-400">
        {props.category?.title ?? "No category"}
      </Typography>
    </div>
  );
}
