import React from 'react'
import { usePosts } from '../context/PostContext'
import Reasults from '../pages/Results'
import SearchPosts from '../posts/SearchPosts'

export default function Header() {
    const {onClearPosts} = usePosts()
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Reasults/>
        <SearchPosts/>
        <button onClick={onClearPosts}>Clear Posts</button>
      </div>
    </header>
  )
}
