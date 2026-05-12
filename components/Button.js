/**
 * EXTENDED DESCRIPTION:
 * This is a reusable button component for the AI Studio UI.
 * It keeps your interface consistent and modular.
 */

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        background: "#1a1a1a",
        border: "1px solid #333",
        borderRadius: "6px",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
