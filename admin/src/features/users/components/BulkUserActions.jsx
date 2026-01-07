import { Button } from "@mui/material";

const BulkUserActions = ({
  selectedCount,
  onActivate,
  onBlock,
  onDelete,
}) => {
  if (selectedCount === 0) return null;

  return (
    <div className="flex gap-2">
      <Button size="small" onClick={onActivate}>
        Activate
      </Button>
      <Button size="small" onClick={onBlock}>
        Block
      </Button>
      <Button
        size="small"
        color="error"
        onClick={onDelete}
      >
        Delete
      </Button>
    </div>
  );
};

export default BulkUserActions;
