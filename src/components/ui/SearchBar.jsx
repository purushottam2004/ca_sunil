import { useState } from 'react'
import { Search, X } from 'lucide-react'

export default function SearchBar({ onSearch, placeholder = 'Search...', className = '' }) {
  const [query, setQuery] = useState('')

  function handleChange(e) {
    const val = e.target.value
    setQuery(val)
    onSearch(val)
  }

  function clearSearch() {
    setQuery('')
    onSearch('')
  }

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition"
      />
      {query && (
        <button onClick={clearSearch} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
