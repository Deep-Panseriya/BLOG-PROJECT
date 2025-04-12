import React from 'react'
import { usePosts } from '../context/PostContext'

export default function Reasults() {
    const{posts} = usePosts()
  return (
    <p>🚀 {posts.length} atomic posts found</p>
  )
}
