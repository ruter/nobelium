import Container from '@/components/Container'
import '@/styles/500.css'

export default function Custom500 () {
  return (
    <Container>
      <h5>Internal Server error !</h5>
      <h1>5</h1>
      <h1>00</h1>
      <div className="box">
        <span></span><span></span>
        <span></span><span></span>
        <span></span>
      </div>
      <div className="box">
        <span></span><span></span>
        <span></span><span></span>
        <span></span>
      </div>
      <p> We&apos;re unable to find out what&apos;s happening! We suggest you to
        <br />
        <a href="#">Go Back</a>
        or visit here later.
      </p>
    </Container>
  )
}
