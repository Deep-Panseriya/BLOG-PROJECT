import React from 'react'
import { usePosts } from '../context/PostContext'

export default function SearchPosts () {
  const { searchQuery, setSearchQuery } = usePosts()
  return (
    <input
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder='Search posts...'
    />
  )
}
