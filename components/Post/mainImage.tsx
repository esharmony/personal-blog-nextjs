export interface MainImageProps {
  Url: string;
  Title: string;
  IsPreview?: boolean;
}

const MainImage = (props: MainImageProps): JSX.Element => {
  return (
    <>
      <img
        src={props.Url}
        alt={props.Title}
        className={`max-w-sm hidden  md:float-right ml-10 mb-10 ${
          props.IsPreview ? 'md:hidden' : 'md:block'
        }`}
      />
      <div
        title={props.Title}
        className={`h-24 mb-5 w-full bg-cover ${
          props.IsPreview ? 'md:block' : 'md:hidden'
        }`}
        style={{ backgroundImage: `url(${props.Url})` }}
      >
        &nbsp;
      </div>
    </>
  );
};

export default MainImage;
