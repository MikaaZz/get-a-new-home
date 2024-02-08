import Typography from "@/components/shared/typography/Typography";
import ManagementForm from "./components/ManagementForm";
import { getHome } from "@/actions/homes/get";

export default async function ManagementPage({
  params,
}: {
  params: { id: string };
}) {
  const home = await getHome(params.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Typography variant="T_Medium_H3">Register</Typography>
      <ManagementForm home={home ?? undefined} />
    </div>
  );
}
