import { TwitterShareButton, TwitterIcon } from 'next-share'
import { getTweetText } from '../hooks/getTweetText'
import { Menu } from '../domain/Menu'
import styled from 'styled-components'

type Props = {
  result: Menu[]
}

export const Twitter: React.FC<Props> = (props) => {
  const result = props.result

  if (!result.length) return <div></div>

  const tweetText = getTweetText(result)
  return (
    <StyledContainer>
      <Baloon>{'結果をツイート'}</Baloon>
      <TwitterShareButton
        url={process.env.NEXT_PUBLIC_BASE_URL}
        title={tweetText}
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>
    </StyledContainer>
  )
}


const StyledContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`

const Baloon = styled.div`
  position: relative;
  text-align: center;
  margin: 0 auto 10px;
  padding: 7px 10px;
  width: 100px;
  height: 15px;
  color: rgba(0, 124, 0, 1);
  font-size: 0.7em;

  background: #e5f2e5;
  border-radius: 15px;

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid transparent;
    border-top: 5px solid #e0edff;
  }
`
