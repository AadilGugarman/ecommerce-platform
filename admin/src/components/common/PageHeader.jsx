// src/components/common/PageHeader.jsx
import { Button } from "@mui/material";
import { FiPlus } from "react-icons/fi";

const PageHeader = ({ title, actionLabel, onAction }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-sm text-gray-500">
          Here’s what’s happening with your store today
        </p>
      </div>

      {actionLabel && (
        <Button
          variant="contained"
          startIcon={<FiPlus />}
          onClick={onAction}
          sx={{
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            textTransform: "none",
            borderRadius: "10px",
            paddingX: 3,
            boxShadow: "0 10px 25px rgba(59,130,246,0.35)",
          }}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default PageHeader;
