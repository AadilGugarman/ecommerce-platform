import { useState } from "react";

const SiteNameForm = ({ onSave }) => {
  const [name, setName] = useState("");

  return (
    <div className="space-y-2">
      <input
        className="input"
        placeholder="Site Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="btn-primary"
        onClick={() => onSave(name)}
      >
        Save
      </button>
    </div>
  );
};

export default SiteNameForm;
