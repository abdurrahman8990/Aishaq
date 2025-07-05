// src/components/ui/button.jsx
export function Button({ children, ...props }) {
  return (
    <button
      className="rounded px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white"
      {...props}
    >
      {children}
    </button>
  );
}
