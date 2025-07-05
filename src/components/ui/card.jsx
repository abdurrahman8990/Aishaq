// src/components/ui/card.jsx
export function Card({ children, ...props }) {
  return (
    <div className="border rounded shadow p-4 bg-white" {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div className="mb-2 border-b pb-2">
      {children}
    </div>
  );
}

export function CardTitle({ children }) {
  return (
    <h3 className="text-lg font-bold">
      {children}
    </h3>
  );
}

export function CardDescription({ children }) {
  return (
    <p className="text-gray-600 text-sm">
      {children}
    </p>
  );
}

export function CardContent({ children }) {
  return (
    <div className="mt-2">
      {children}
    </div>
  );
}
