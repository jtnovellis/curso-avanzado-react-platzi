import { useState, useEffect } from 'react'

export function useCategoriesData() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(
      'https://api-curso-avanzado-react-platzi-production.up.railway.app/categories'
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}
