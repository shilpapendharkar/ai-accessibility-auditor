// components/Button.tsx
export default function Button({ children, className, ...props }: { children: any; className?: string; [key: string]: any; }) {
  return (
    <button className={`px-4 py-2 rounded bg-blue-600 text-white ${className}`} {...props}>
      {children}
    </button>
  )
}