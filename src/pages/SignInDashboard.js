import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignInDashboard = () => {
  const navigate = useNavigate();

  const onStudentPortalTextClick = useCallback(() => {
    navigate("/student-portal");
  }, [navigate]);

  const onIndustryPortalTextClick = useCallback(() => {
    // Please sync "Industry Portal" to the project
  }, []);

  const onAlumniPortalTextClick = useCallback(() => {
    navigate("/alumni-portal")
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/student-portal");
  }, [navigate]);



  const onImage4Click = useCallback(() => {
    // Please sync "Alumni Portal" to the project
  }, []);

  const onAdminPortalTextClick = useCallback(() => {
    // Please sync "AdminPortal" to the project
  }, []);

  const onImage1Click = useCallback(() => {
    // Please sync "AdminPortal" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[832px] text-left text-6xl text-dimgray font-sora">
      <img
        className="absolute top-[-27px] left-[-348px] w-[988px] h-[857px] object-cover"
        alt=""
        src="/rectangle-41@2x.png"
      />
      <img
        className="absolute top-[-5px] left-[-7px] w-[694px] h-[837px] object-cover"
        alt=""
        src="/rectangle-37@2x.png"
      />
      <div className="absolute top-[0px] left-[484px] rounded-tl-16xl rounded-tr-none rounded-br-none rounded-bl-16xl bg-whitesmoke-200 w-[796px] h-[832px]" />
      <div className="absolute top-[259px] left-[656px] rounded-3xs [background:linear-gradient(160.89deg,_rgba(181,_116,_245,_0.09),_rgba(116,_131,_207,_0.09)_48.44%,_rgba(83,_189,_235,_0.09))] shadow-[32.1px_-32.1px_32.07px_rgba(165,_165,_165,_0.09)_inset,_-32.1px_32.1px_32.07px_rgba(255,_255,_255,_0.09)_inset] [backdrop-filter:blur(29.5px)] w-[439px] h-[519px]" />
      <b className="absolute top-[191px] left-[702px] text-[16px] font-poppins text-gray-200 text-center">
        Connecting Futures, Empowering Careers.
      </b>
      <img
        className="absolute top-[181px] left-[723px] w-[291px] h-px object-contain"
        alt=""
        src="/line-6@2x.png"
      />
      <div className="absolute top-[26px] left-[801px] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(92,_134,_196,_0.34)_-48.13deg,_rgba(106,_104,_175,_0.29)_45.62deg,_rgba(105,_105,_176,_0.17)_137.5deg,_rgba(101,_116,_184,_0.47)_218.94deg,_rgba(92,_134,_196,_0.34)_311.87deg,_rgba(106,_104,_175,_0.29)_405.62deg)] w-[133px] h-[131px]" />
      <img
        className="absolute top-[36px] left-[811px] w-[113px] h-[111px] object-cover"
        alt=""
        src="/unnamed-3@2x.png"
      />
      <img
        className="absolute top-[386.3px] left-[656px] w-[436.1px] h-[5.6px] object-contain"
        alt=""
        src="/line-5@2x.png"
      />
      <img
        className="absolute top-[646.9px] left-[658.8px] w-[436.1px] h-[5.7px] object-contain"
        alt=""
        src="/line-4@2x.png"
      />
      <img
        className="absolute top-[398px] left-[687px] w-[118px] h-[111px] object-cover"
        alt=""
        src="/ellipse-18@2x.png"
      />
      <div className="absolute top-[409px] left-[695px] rounded-[50%] bg-whitesmoke-300 w-[102px] h-[91px]" />
      <img
        className="absolute top-[514.2px] left-[658.9px] w-[436.1px] h-[5.7px] object-contain"
        alt=""
        src="/line-3@2x.png"
      />
      <div
        className="absolute top-[303px] left-[850px] font-semibold inline-block w-[211px] h-[37px] cursor-pointer"
        onClick={onStudentPortalTextClick}
      >
        Student Portal
      </div>
      <div
        className="absolute top-[561px] left-[850px] font-semibold inline-block w-[211px] h-[37px] cursor-pointer"
        onClick={onIndustryPortalTextClick}
      >
        Industry Portal
      </div>
      <div
        className="absolute top-[430px] left-[850px] font-semibold inline-block w-[211px] h-[37px] cursor-pointer"
        onClick={onAlumniPortalTextClick}
      >
        Alumni Portal
      </div>
      <img
        className="absolute top-[271px] left-[687px] w-[118px] h-[111px] object-cover"
        alt=""
        src="/ellipse-18@2x.png"
      />
      <div className="absolute top-[282px] left-[695px] rounded-[50%] bg-whitesmoke-300 w-[102px] h-[90px]" />
      <img
        className="absolute top-[529px] left-[687px] w-[118px] h-[110px] object-cover"
        alt=""
        src="/ellipse-20@2x.png"
      />
      <div className="absolute top-[539px] left-[695px] rounded-[50%] bg-whitesmoke-300 w-[102px] h-[91px]" />
      <img
        className="absolute top-[290px] left-[712px] w-[68px] h-[74px] object-cover cursor-pointer"
        alt=""
        src="/image-3@2x.png"
        onClick={onImage3Click}
      />
      <img
        className="absolute top-[550px] left-[711px] w-[70px] h-[63px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
      <img
        className="absolute top-[423px] left-[720px] w-[52px] h-[59px] object-cover cursor-pointer"
        alt=""
        src="/image-4@2x.png"
        onClick={onImage4Click}
      />
      <div
        className="absolute top-[694px] left-[850px] font-semibold inline-block w-[211px] h-[37px] cursor-pointer"
        onClick={onAdminPortalTextClick}
      >
        Admin Portal
      </div>
      <img
        className="absolute top-[660px] left-[687px] w-[118px] h-[110px] object-cover"
        alt=""
        src="/ellipse-20@2x.png"
      />
      <div className="absolute top-[669px] left-[695px] rounded-[50%] bg-whitesmoke-300 w-[102px] h-[92px]" />
      <img
        className="absolute top-[678px] left-[702px] w-[81px] h-[74px] object-cover cursor-pointer"
        alt=""
        src="/image-1@2x.png"
        onClick={onImage1Click}
      />
    </div>
  );
};

export default SignInDashboard;
