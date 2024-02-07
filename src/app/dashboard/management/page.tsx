import Typography from "@/components/shared/typography/Typography";
import ManagementForm from "./components/ManagementForm";

export default async function ManagementPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Typography variant="T_Medium_H3">Register</Typography>
      <ManagementForm />
    </div>
  );
}
