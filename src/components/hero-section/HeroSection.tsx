import Typography from "../shared/typography/Typography";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full bg-hero-section bg-cover bg-center flex items-stretch justify-start">
      <div className="bg-slate-400 w-1/2 backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col items-start justify-center">
        <div className="flex flex-col items-start justify-center w-90 mx-auto">
          <Typography variant="T_Bold_H1" className="text-slate-400">
            Key Change:
          </Typography>
          <Typography variant="T_SemiBold_H2" className="">
            Where couples find their next chapter.
          </Typography>
          <Typography variant="T_Regular_P" className="">
            Ready for a change of scenery? Key Change connects couTypographyles
            like you, ready to embark on a new adventure, with motivated sellers
            looking to pass on their cherished homes abroad.
          </Typography>
        </div>
      </div>
    </div>
  );
}
