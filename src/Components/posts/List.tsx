import React from 'react'
import { usePosts } from '../context/PostContext'

// Define the Post type
type Post = {
  id: string | number
  title: string
  body: string
}

export default function List () {
  const { posts } = usePosts()
  return (
    <>
      <ul>
        {posts.map((post: Post, i: number) => (
          <li key={i}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
