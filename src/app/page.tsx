import Container from '@/app/_components/container'
import { Intro } from '@/app/_components/intro'
import { Posts } from '@/app/_components/posts'
import loadAPI from '@/lib/api'

export default async function Index() {
  const api = await loadAPI()
  const posts = await api.getAllPosts()

  return (
    <main>
      <Container>
        <Intro />
        {posts.length > 0 && <Posts posts={posts} />}
      </Container>
    </main>
  )
}

export const runtime =
  process.env.NODE_ENV === 'development' ? 'nodejs' : 'edge'
