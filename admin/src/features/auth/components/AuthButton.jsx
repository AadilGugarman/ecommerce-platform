// features/auth/components/AuthButton.jsx

import { Button } from "@mui/material";

const AuthButton = ({ loading, children, ...props }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      disabled={loading}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AuthButton;
