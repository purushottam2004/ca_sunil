export default function Card({ children, hover = false, className = '', onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
