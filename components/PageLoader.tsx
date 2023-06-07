import {  TailSpin} from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <TailSpin height={100} width={100} color="cyan" />
    </div>
  );
};

export default PageLoader;
