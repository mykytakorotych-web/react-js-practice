import { useEffect, useRef, useState } from 'react'
import { useGetRecipesQuery } from '../store/api/recipesApi'

export const useInfinityScroll = () => {
  const [skip, setSkip] = useState(0)
  const LIMIT = 10

  const { data, error, isLoading, isFetching } = useGetRecipesQuery({
    limit: LIMIT,
    skip,
  })

  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isFetching) {
          if (data && data.recipes.length < data.total) {
            setSkip(prev => prev + LIMIT)
          }
        }
      },
      {
        threshold: 1.0
      },
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [isFetching, data])


  return {
    data,
    error,
    isLoading,
    isFetching,
    observerRef
  }
}