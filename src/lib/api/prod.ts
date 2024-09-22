import { Post } from '@/interfaces/post'
import matter from 'gray-matter'

const posts = [
  'dynamic-routing.md',
  'hello-world.md',
  'preview.md',
  // new post, add it here
]

export async function getPostBySlug(slug: string) {
  const url = `https://raw.githubusercontent.com/aesrael/blog/main/_posts/${
    slug.endsWith('.md') ? slug : slug + '.md'
  }`
  let postContent = ''
  try {
    const res = await fetch(url)
    if (!res.ok) {
      return null
    }
    postContent = await res.text()
  } catch (err) {
    console.error(`ERROR: ${err}`)
    return null
  }

  const { data, content } = matter(postContent)
  return { ...data, slug, content } as Post
}

export async function getAllPosts(): Promise<Post[]> {
  let blogPosts = (await Promise.all(
    posts.map((post) => getPostBySlug(post)),
  )) as Post[]
  blogPosts = blogPosts
    .filter(Boolean)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return blogPosts
}
