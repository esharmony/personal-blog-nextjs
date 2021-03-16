import PostIndicatorTitleHelper from './helpers/postIndicatorTitleHelper';

export type PostType =
  | 'Vlog'
  | 'Article'
  | 'VideoTutorial'
  | 'Tutorial'
  | 'QuickTip';

export interface Props {
  PostType: PostType;
  IsPreview?: boolean;
}

const getIcon = (postType: PostType): JSX.Element => {
  switch (postType) {
    case 'Vlog':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='#333'
          width='25'
          height='25'
        >
          <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
        </svg>
      );
    case 'Tutorial':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='#333'
          width='25'
          height='25'
        >
          <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z' />
        </svg>
      );
    case 'VideoTutorial':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='#333'
          width='25'
          height='25'
        >
          <path
            fillRule='evenodd'
            d='M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z'
            clipRule='evenodd'
          />
        </svg>
      );
    case 'QuickTip':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='#333'
          width='25'
          height='25'
        >
          <path
            fillRule='evenodd'
            d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
            clipRule='evenodd'
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='#333'
          width='25'
          height='25'
        >
          <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
        </svg>
      );
  }
};

const PostTypeIndicator = (props: Props): JSX.Element => {
  return (
    <div
      title={`${PostIndicatorTitleHelper(props.PostType)}`}
      className={` border-gray-800 bg-white border-2 p-1 inline-block rounded-full ${
        props.IsPreview ? 'md:block' : 'md:hidden'
      } float-right mr-4`}
    >
      {getIcon(props.PostType)}
    </div>
  );
};

export default PostTypeIndicator;
