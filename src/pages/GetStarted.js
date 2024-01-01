import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/signin-dashboard");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[832px] overflow-hidden text-left text-sm text-white font-poppins">
      <img
        className="absolute top-[0px] left-[0px] w-[1480px] h-[832px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.76),_rgba(0,_0,_0,_0.73)_41.32%,_rgba(53,_53,_54,_0.7)_62.67%,_rgba(128,_128,_128,_0.84)_92.36%,_rgba(147,_147,_147,_0.69))] w-[1480px] h-[832px]" />
      <div className="absolute top-[535px] left-[145px] flex items-center w-[543px] h-12">
        We bridge the gap between students, alumni, and industry partners to
        create a world of career possibilities.
      </div>
      <b className="absolute top-[444px] left-[145px] text-6xl inline-block text-center w-[543px] h-[43px]">
        Connecting Futures, Empowering Careers.
      </b>
      <div className="absolute top-[415px] left-[144px] box-border w-[602px] h-0.5 border-t-[2px] border-solid border-white" />
      <div className="absolute top-[653px] left-[145px] rounded-[50%] [background:linear-gradient(180deg,_#696ab1,_#6478ba_44.79%,_#5c86c4)] w-[68px] h-[66px]" />
      <img
        className="absolute h-[3.25%] w-[1.25%] top-[80.77%] right-[85.39%] bottom-[15.99%] left-[12.8%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt=""
        src="/vector@2x.png"
        onClick={onVectorIconClick}
      />
      <div className="absolute top-[209px] left-[145px] w-[974px] h-[159px] text-26xl font-sora">
        <div className="absolute top-[78px] left-[373px] w-[512px] h-[61px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90.69deg,_#686cb2_12.15%,_#6b91ca)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[512px] h-[61px]">
            <p className="m-0">Connecting Futures</p>
            <p className="m-0">Empowering Careeres</p>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] inline-block w-[974px] h-[159px] font-dm-serif-display">
          <p className="m-0">
            <b className="text-51xl font-droid-sans">MAJU</b>
            <span>
              <span>{` `}</span>
            </span>
          </p>
          <p className="m-0 font-sora">
            <span>
              <span className="font-semibold">CareerConnect</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
