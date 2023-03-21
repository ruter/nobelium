import Container from '@/components/Container'

export default function Page500 () {
  return (
    <Container>
      <h1 className="text-5xl text-black dark:text-white text-center">500</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center">Internal Server Error</p>
    </Container>
  )
}
