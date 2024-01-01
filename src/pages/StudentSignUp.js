import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const StudentSignUp = () => {
  const navigate = useNavigate();

  const onRectangle8Click = useCallback(() => {
    navigate("/student-portal");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/student-portal");
  }, [navigate]);



  return (
    <div className="relative bg-white w-full h-[832px] overflow-hidden text-left text-3xl text-darkgray font-sen">
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
      <div className="absolute top-[0px] left-[484px] rounded-tl-16xl rounded-tr-none rounded-br-none rounded-bl-16xl bg-whitesmoke-200 w-[794px] h-[832px]" />
      <div className="absolute top-[0px] left-[484px] rounded-tl-13xl rounded-tr-none rounded-br-none rounded-bl-13xl [background:linear-gradient(160.89deg,_rgba(181,_116,_245,_0.09),_rgba(116,_131,_207,_0.09)_48.44%,_rgba(83,_189,_235,_0.09))] shadow-[32.1px_-32.1px_32.07px_rgba(165,_165,_165,_0.09)_inset,_-32.1px_32.1px_32.07px_rgba(255,_255,_255,_0.09)_inset] [backdrop-filter:blur(29.5px)] w-[796px] h-[832px]" />
      <div className="absolute top-[253px] left-[626px] rounded-3xs bg-steelblue shadow-[32.1px_-32.1px_32.07px_rgba(165,_165,_165,_0.09)_inset,_-32.1px_32.1px_32.07px_rgba(255,_255,_255,_0.09)_inset] [backdrop-filter:blur(29.5px)] w-[511px] h-[482px] opacity-[0.5] mix-blend-screen" />
      <div className="absolute top-[105px] left-[calc(50%_+_185px)] text-25xl font-semibold font-poppins text-darkslateblue inline-block w-[219px] h-[39px]">
    Sign Up
      </div>
      <img
        className="absolute top-[128px] left-[calc(50%_+_353px)] rounded-3xs max-h-full w-[106px] object-cover"
        alt=""
        src="/vector-2@2x.png"
      />
      <img
        className="absolute top-[128px] left-[calc(50%_+_23px)] rounded-3xs max-h-full w-[106px] object-cover"
        alt=""
        src="/vector-2@2x.png"
      />
      <div className="absolute top-[408px] left-[665px] w-[434px] h-[53px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray" />
        <div className="absolute h-[58.3%] w-[27.76%] top-[21.7%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute h-2/5 w-[28.06%] top-[30%] left-[8.06%] inline-block">
          Email
        </div>
      </div>
      <div className="absolute top-[495px] left-[665px] w-[434px] h-[53px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray" />
        <div className="absolute h-[58.3%] w-[27.76%] top-[21.7%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute h-[38.3%] w-[43%] top-[30%] left-[7.17%] inline-block">
          Password
        </div>
      </div>
      <img
        className="absolute h-[2.26%] w-[2.24%] top-[61.66%] right-[15.91%] bottom-[36.08%] left-[81.85%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/-icon-eye-slash@2x.png"
      />
      <div
        className="absolute top-[592px] left-[746px] rounded-sm [background:linear-gradient(90deg,_rgba(107,_99,_172,_0.73)_4.69%,_rgba(105,_107,_177,_0.68)_27.78%,_rgba(99,_121,_187,_0.75)_50%,_rgba(92,_133,_196,_0.68)_71.01%,_rgba(36,_113,_168,_0.61)_97.92%)] w-[287px] h-11 cursor-pointer"
        onClick={onRectangle8Click}
      />
      <b className="absolute top-[598px] left-[793px] text-5xl flex text-whitesmoke-100 text-center items-center justify-center w-[184px] h-[27px]">
        Sign Up
      </b>
      <div className="absolute top-[180px] left-[800px] text-[18px] text-darkslateblue whitespace-pre-wrap flex items-center w-[299px] h-[7px]">
        Please Sign Up to continue
      </div>
      <div className="absolute top-[311px] left-[665px] w-[434px] h-[53px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray" />
        <div className="absolute h-[58.3%] w-[27.76%] top-[21.7%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute h-[35.09%] w-[28.06%] top-[33.4%] left-[8.06%] inline-block">
          Name
        </div>
      </div>
      <div
        className="absolute top-[683px] left-[665px] text-sm text-dimgray inline-block w-[270px] h-[27px] cursor-pointer"
        onClick={onAlreadyHaveAnClick}
      >
        <span className="font-sen">Already have an Account?</span>
        <b>{` `}</b>
        <b>
          <span className="[text-decoration:underline]">Login</span>
        </b>
      </div>
    </div>
  );
};

export default StudentSignUp;
