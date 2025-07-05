// src/components/ui/badge.jsx
export function Badge({ children, ...props }) {
  return (
    <span
      className="inline-block px-2 py-1 rounded bg-purple-100 text-purple-800 text-xs font-semibold"
      {...props}
    >
      {children}
    </span>
  );
}
