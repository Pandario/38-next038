
interface HeroSectionProps {
    title: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({title}) => {
    return (
            <div className="relative flex w-full h-[350px]">
                
                <video src='/video/mainvd.mp4' loop muted autoPlay className='flex object-cover w-full -z-10 contrast-125 brightness-90' ></video>
                
                <div className=" absolute lg:top-1/2 md:top-1/3 top-1/4 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full text-orange-500  text-center mix-blend-difference  pointer-events-none">
                    <p className=" text-2xl md:text-3xl lg:text-9xl font-bold whitespace-nowrap md:pt-12 font-custom tracking-widest">{title}</p>
                </div>
            
            </div>
    );
  };

  export default HeroSection;