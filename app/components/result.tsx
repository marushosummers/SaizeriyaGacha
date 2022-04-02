import { Menu } from '../domain/Menu'
import { Items } from './items'
import { Summary } from './summary'
import { Twitter } from './twitter'

type Props = {
  result: Menu[]
}

export const Result: React.FC<Props> = (props) => {
  const result = props.result
  if (!result.length) return <div></div>
  return (
    <div className="result">
      <Items result={result} />
      <Summary result={result} />
      <Twitter result={result} />
    </div>
  )
}
