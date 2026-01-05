import { CircularProgress } from "@mui/material";

const Loader = ({ size = 32 }) => {
  return (
    <div className="flex items-center justify-center py-10">
      <CircularProgress size={size} />
    </div>
  );
};

export default Loader;
