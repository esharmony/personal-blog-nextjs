import Image from 'next/image';

export interface MainImageProps {
  Url: string;
  Title: string;
  IsPreview?: boolean;
}

const MainImage = (props: MainImageProps): JSX.Element => {
  return (
    <>
      <div
        className={` w-max hidden md:float-right ml-10 mb-10 ${
          props.IsPreview ? 'md:hidden' : 'md:block'
        }`}
      >
        <Image
          layout='fixed'
          src={props.Url}
          alt={props.Title}
          width={320}
          height={225}
          quality={90}
        />
      </div>

      <div
        title={props.Title}
        className={`h-24 mb-5 w-full bg-cover overflow-hidden ${
          props.IsPreview ? 'md:block' : 'md:hidden'
        }`}
      >
        <Image
          layout='responsive'
          src={props.Url}
          alt={props.Title}
          width={320}
          height={225}
          quality={90}
          className='image -top-11'
        />
      </div>
    </>
  );
};

export default MainImage;
