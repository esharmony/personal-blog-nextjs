export interface MainImageProps {
  Url: string;
  Title: string;
}

const MainImage = (props: MainImageProps): JSX.Element => {
 
  return <>
    <img src={props.Url} alt={props.Title} className="max-w-sm hidden md:block" />
        <div 
            title={props.Title} 
            className="h-24 md:hidden w-screen bg-cover" 
            style={{backgroundImage: `url(${props.Url})`, minWidth:'300px'}}>
                &nbsp;
        </div>
    </>
};

export default MainImage;
