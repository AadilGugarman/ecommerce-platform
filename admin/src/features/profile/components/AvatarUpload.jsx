const AvatarUpload = ({ onUpload }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">
        Update Avatar
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onUpload(e.target.files[0])}
      />
    </div>
  );
};

export default AvatarUpload;
