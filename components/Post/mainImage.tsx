export interface MainImageProps {
  Url: string;
  Title: string;
  IsPreview?: boolean;
}
const MainImage = ({ Url, Title, IsPreview }: MainImageProps): JSX.Element => {
  return (
    <>
      <img
        src={Url}
        alt={Title}
        className={`max-w-sm hidden  md:float-right ml-10 mb-10 ${
          IsPreview ? 'md:hidden' : 'md:block'
        }`}
      />
      <div
        title={Title}
        className={`h-24 mb-5 w-full bg-cover ${
          IsPreview ? 'md:block' : 'md:hidden'
        }`}
        style={{ backgroundImage: `url(${Url})`, backgroundPositionY:'-40px' }}
      >
        &nbsp;
      </div>
    </>
  );
};
export default MainImage;
