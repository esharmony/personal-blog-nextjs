import ReactMarkdown from 'react-markdown';
export interface BodyTextProps {
  Text: string;
}

const BodyText = (props: BodyTextProps): JSX.Element => {
  return (
    <div className="markdown mx-4 md:mx-0">
      <ReactMarkdown source={props.Text} />
    </div>
  );
};

export default BodyText;
