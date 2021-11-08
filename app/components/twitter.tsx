
import {
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'
import { getTweetText } from '../hooks/getTweetText';
import { Menu } from '../domain/Menu';

type Props = {
  result: Menu[];
}

export const Twitter: React.FC<Props> = (props) => {
  const result = props.result;

  if (!result.length) return <div></div>;

  const tweetText = getTweetText(result)
    return (
      <div className="tweet">
        <TwitterShareButton
          url={'https://saizeriya-1000yen.marusho.io/'}
          title={tweetText}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </div>
	);
}
