import Container from '@/app/_components/container'

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div
        // className="py-28 flex flex-col lg:flex-row items-center"
        >
          <div className="text-center lg:text-left text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()}{' '}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
