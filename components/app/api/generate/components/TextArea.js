/**
 * EXTENDED DESCRIPTION:
 *
 * This TextArea.js component provides a reusable, styled multi-line input field
 * for the AI Studio system. It is designed for longer prompts, detailed inputs,
 * and any text that requires more space than a standard input field.
 *
 * This component is essential because:
 * - It standardizes how large text inputs look and behave
 * - It keeps the UI modular, clean, and consistent
 * - It supports AI workflows that require long prompts or instructions
 * - It centralizes styling so future UI changes are easy and fast
 *
 * Without this component, long-form input would be inconsistent across pages,
 * making the interface feel unpolished and harder to maintain.
 */

export default function TextArea({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        padding: "12px",
        width: "100%",
        height: "140px",
        borderRadius: "6px",
        border: "1px solid #333",
        background: "#0f0f0f",
        color: "#fff",
        marginBottom: "12px",
        resize: "vertical"
      }}
    />
  );
}
