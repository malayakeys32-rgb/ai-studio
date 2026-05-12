/**
 * EXTENDED DESCRIPTION:
 * This is a reusable input field for the AI Studio system.
 * It standardizes user input styling across the app.
 */

export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "10px",
        width: "100%",
        borderRadius: "6px",
        border: "1px solid #333",
        background: "#0f0f0f",
        color: "#fff",
        marginBottom: "12px"
      }}
    />
  );
}
