import { Content } from "./Content"
import { Toolbar } from "./Toolbar"

const MainArea = () => {
  return(
    <article className="mainarea">
      <Toolbar/>
      <Content/>
    </article>
  )
}
export { MainArea }