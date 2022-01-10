import ReactMarkdown from 'react-markdown';
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from 'rehype-raw';


export interface BodyTextProps {
  Text: string;
}

const BodyText = (props: BodyTextProps): JSX.Element => {
  return (
    <div className='markdown mx-4 md:mx-0'>
      <ReactMarkdown
      //@ts-ignore
      rehypePlugins={[rehypeRaw]}
                components={{
                code({ children }: any): JSX.Element {
                  return (
                      <SyntaxHighlighter
                          style={dark}
                          language={'typescript'}
                          children={children[0]}
                      />
                  );
              },
                }}
            >
                {props.Text}
            </ReactMarkdown>
    </div>
  ); 
};

export default BodyText;
