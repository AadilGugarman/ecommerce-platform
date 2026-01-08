import { useSettings } from "./hooks/useSettings";

const SettingsPage = () => {
  const {
    updateSiteName,
    uploadLogo,
    updateTheme,
    loading,
    message,
  } = useSettings();

  return (
    <div className="max-w-md space-y-6">
      <h1 className="text-2xl font-semibold">
        Settings
      </h1>

      {/* Site Name */}
      <input
        placeholder="Site Name"
        className="w-full p-2 border"
        onBlur={(e) =>
          updateSiteName(e.target.value)
        }
      />

      {/* Logo */}
      <input
        type="file"
        onChange={(e) =>
          uploadLogo(e.target.files[0])
        }
      />

      {/* Theme */}
      <select
        className="p-2 border"
        onChange={(e) =>
          updateTheme(e.target.value)
        }
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      {loading && <p>Saving...</p>}
      {message && (
        <p className="text-green-600">
          {message}
        </p>
      )}
    </div>
  );
};

export default SettingsPage;
