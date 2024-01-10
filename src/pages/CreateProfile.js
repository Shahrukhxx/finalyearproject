import { useCallback } from "react";

const CreateProfile = () => {
  const onNeteorkContainerClick = useCallback(() => {
    // Please sync "My Network" to the project
  }, []);

  const onSearchPositionsTextClick = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  return (
    <div className="relative bg-whitesmoke-400 w-full h-[832px] overflow-y-auto text-left text-sm text-steelblue-100 font-sora">
      <div className="absolute top-[202px] left-[91px] rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1098px] h-[1593px]" />
      <div className="absolute top-[362px] left-[103px] text-lg font-inter text-gray-300 inline-block w-[380px] h-[22px]">
        Create profile to continue
      </div>
      <div className="absolute top-[288px] left-[91px] bg-gainsboro w-[1098px] h-[15px]" />
      <div className="absolute top-[402px] left-[90px] bg-gainsboro w-[1098px] h-0.5" />
      <div className="absolute top-[224px] left-[160px] text-[34px] font-semibold font-poppins text-black inline-block w-[395px] h-[46px]">
        Create Student Profile
      </div>
      <div className="absolute top-[330px] left-[101px] text-[26px] font-medium font-inter text-black inline-block w-[380px] h-8">
        General information
      </div>
      <div className="absolute top-[431px] left-[534px] rounded-lg bg-whitesmoke-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[195px] h-[191px]" />
      <div className="absolute top-[582px] left-[695px] rounded-[50%] bg-steelblue-200 w-[51px] h-[51px]" />
      <img
        className="absolute top-[586px] left-[700px] w-[41px] h-[42px] overflow-hidden object-cover"
        alt=""
        src="/icroundplus@2x.png"
      />
      <div className="absolute top-[670px] left-[478px] rounded-sm [background:linear-gradient(90deg,_rgba(107,_99,_172,_0.73)_4.69%,_rgba(105,_107,_177,_0.68)_27.78%,_rgba(99,_121,_187,_0.75)_50%,_rgba(92,_133,_196,_0.68)_71.01%,_rgba(36,_113,_168,_0.61)_97.92%)] w-[324px] h-11" />
      <b className="absolute top-[678px] left-[547px] text-5xl flex font-sen text-whitesmoke-200 text-center items-center justify-center w-[187px] h-[27px]">
        Upload a photo
      </b>
      <img
        className="absolute top-[452px] left-[555px] w-[151px] h-[149px] overflow-hidden object-cover"
        alt=""
        src="/phusercircleplusduotone@2x.png"
      />
      <img
        className="absolute top-[224px] left-[101px] w-[46px] h-[50px] overflow-hidden object-cover"
        alt=""
        src="/streamlineusercirclesinglesolid@2x.png"
      />
      <div className="absolute top-[785px] left-[174px] w-[403px] h-[60px] text-3xl text-darkgray-200 font-sen">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray-200" />
        <div className="absolute h-[58.33%] w-[27.77%] top-[21.67%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute h-[35%] w-[48.96%] top-[33.33%] left-[8.06%] inline-block">
          First Name
        </div>
      </div>
      <div className="absolute top-[785px] left-[704px] w-[403px] h-[60px] text-3xl text-darkgray-200 font-sen">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray-200" />
        <div className="absolute h-[58.33%] w-[27.77%] top-[21.67%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute h-[35%] w-[48.96%] top-[33.33%] left-[8.06%] inline-block">
          Last Name
        </div>
      </div>
      <div className="absolute top-[1714px] left-[481px] w-[324px] h-11 text-9xl text-gray-300 font-sen">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-gray-300" />
        <div className="absolute h-[61.36%] w-[32.72%] top-[18.18%] left-[33.64%] flex items-center">
          Cancel
        </div>
      </div>
      <div className="absolute top-[889px] left-[174px] w-[403px] h-[60px] text-3xl text-darkgray-200 font-sen">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray-200" />
        <div className="absolute h-[58.33%] w-[27.77%] top-[21.67%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute h-[35%] w-[48.96%] top-[33.33%] left-[8.06%] inline-block">
          Email
        </div>
      </div>
      <div className="absolute top-[889px] left-[704px] w-[403px] h-[60px] text-3xl text-darkgray-200 font-sen">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray-200" />
        <div className="absolute h-[58.33%] w-[27.77%] top-[21.67%] right-[68.06%] bottom-[20%] left-[4.17%] bg-gray-100" />
        <div className="absolute top-[18px] left-[24px] w-36 h-[23px]">
          <div className="absolute h-full w-[131.25%] top-[0%] left-[0%] inline-block">
            Contact Number
          </div>
        </div>
      </div>
      <button className="absolute top-[1714px] left-[833px] w-[324px] h-11 text-9xl text-whitesmoke-200 font-sen">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm [background:linear-gradient(90deg,_rgba(107,_99,_172,_0.73)_4.69%,_rgba(105,_107,_177,_0.68)_27.78%,_rgba(99,_121,_187,_0.75)_50%,_rgba(92,_133,_196,_0.68)_71.01%,_rgba(36,_113,_168,_0.61)_97.92%)]" />
        <b className="absolute h-[61.36%] w-[38.27%] top-[18.18%] left-[30.86%] flex items-center">
          Continue
        </b>
      </button>
      <div className="absolute top-[993px] left-[704px] w-[403px] h-[564px] overflow-hidden text-5xl text-black font-sen">
        <div className="absolute top-[-480px] left-[0px] rounded-3xs flex flex-col items-start justify-start border-[1.5px] border-solid border-darkgray-200">
          <div className="relative rounded-t-3xs rounded-b-none w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              <p className="m-0">1st (First) Semester</p>
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              <p className="m-0">2nd (Second) Semester</p>
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              3rd (Third) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              4th (Fourth) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              5th (Fifth) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              6th (Sixth) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              7th (Seventh) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-3xs bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              8th (Eighth) Semester
            </div>
          </div>
        </div>
        <div className="absolute h-[10.64%] w-full top-[0%] right-[0%] bottom-[89.36%] left-[0%] text-3xl text-darkgray-200">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-100 box-border w-[403px] h-[60px] border-[1.5px] border-solid border-darkgray-100" />
          <div className="absolute h-[43.33%] w-[29.28%] top-[28.33%] left-[6.2%] inline-block">
            Batch*
          </div>
          <img
            className="absolute h-[11.67%] w-[2.98%] top-[50%] right-[3.97%] bottom-[38.33%] left-[93.05%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[993px] left-[174px] w-[403px] h-[564px] overflow-hidden text-5xl text-black font-sen">
        <div className="absolute top-[-480px] left-[0px] rounded-3xs flex flex-col items-start justify-start border-[1.5px] border-solid border-darkgray-200">
          <div className="relative rounded-t-3xs rounded-b-none w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] rounded-t-3xs rounded-b-none bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              <p className="m-0">1st (First) Semester</p>
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              <p className="m-0">2nd (Second) Semester</p>
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              3rd (Third) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              4th (Fourth) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              5th (Fifth) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              6th (Sixth) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              7th (Seventh) Semester
            </div>
          </div>
          <div className="relative w-[403px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-3xs bg-gray-100 w-[403px] h-[60px]" />
            <div className="absolute h-[43.33%] w-[70.97%] top-[28.33%] left-[6.2%] inline-block">
              8th (Eighth) Semester
            </div>
          </div>
        </div>
        <div className="absolute h-[10.64%] w-full top-[0%] right-[0%] bottom-[89.36%] left-[0%] text-3xl text-darkgray-200">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-100 box-border w-[403px] h-[60px] border-[1.5px] border-solid border-darkgray-100" />
          <div className="absolute h-[43.33%] w-[29.28%] top-[28.33%] left-[6.2%] inline-block">
            Degree
          </div>
          <img
            className="absolute h-[11.67%] w-[2.98%] top-[50%] right-[3.97%] bottom-[38.33%] left-[93.05%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[1427px] left-[114px] text-[20px] font-semibold font-inter text-dimgray-100 inline-block w-[456px] h-9">
        Do you want to add any of these skills?
      </div>
      <div className="absolute top-[1219px] left-[117px] text-3xl font-semibold font-poppins text-black inline-block w-[618px] h-[38px]">
        Do you want to share some of your skills?
      </div>
      <div className="absolute top-[1319px] left-[129px] w-[335px] h-[60px] text-3xl text-darkgray-200 font-sen">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 box-border border-[1.5px] border-solid border-darkgray-200" />
        <div className="absolute h-[58.33%] w-[27.76%] top-[21.67%] right-[68.06%] bottom-[20%] left-[4.18%] bg-gray-100" />
        <div className="absolute h-[45%] w-[42.09%] top-[35%] left-[8.06%] inline-block">
          Add a skill
        </div>
      </div>
      <div className="absolute top-[1266px] left-[117px] text-lg font-poppins text-dimgray-200 inline-block w-[402px] h-[23px]">{`We recommend adding at least 6 skills `}</div>
      <div className="absolute top-[1117px] left-[91px] bg-gainsboro w-[1098px] h-[3px]" />
      <div className="absolute top-[1484px] left-[114px] w-[163px] h-[43px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          Web Development
        </div>
      </div>
      <div className="absolute top-[1484px] left-[303px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          DeveOps
        </div>
      </div>
      <div className="absolute top-[1553px] left-[114px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          Design
        </div>
      </div>
      <div className="absolute top-[1483px] left-[492px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          HTML
        </div>
      </div>
      <div className="absolute top-[1553px] left-[303px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          CSS
        </div>
      </div>
      <div className="absolute top-[1553px] left-[870px] w-[163px] h-[43px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          App Development
        </div>
      </div>
      <div className="absolute top-[1483px] left-[681px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          <p className="m-0">Figma (Software)</p>
          <p className="m-0">&nbsp;</p>
        </div>
      </div>
      <div className="absolute top-[1553px] left-[492px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          JavaScript
        </div>
      </div>
      <div className="absolute top-[1553px] left-[681px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          SQA Engineer
        </div>
      </div>
      <div className="absolute top-[1483px] left-[870px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          Data Analyst
        </div>
      </div>
      <div className="absolute top-[1622px] left-[114px] w-[163px] h-[43px] text-xs">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          Front-end Developer
        </div>
      </div>
      <div className="absolute top-[1622px] left-[492px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          UX Designer
        </div>
      </div>
      <div className="absolute top-[1622px] left-[303px] w-[163px] h-[43px] text-xs">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          Back-end Developer
        </div>
      </div>
      <div className="absolute top-[1622px] left-[681px] w-[163px] h-[43px] text-center">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-white box-border border-[2.5px] border-solid border-steelblue-100" />
        <div className="absolute h-[39.53%] w-[82.82%] top-[30.23%] left-[8.59%] font-semibold inline-block">
          UI Designer
        </div>
      </div>
      <div className="absolute top-[1209px] left-[91px] bg-gainsboro w-[1098px] h-1" />
      <div className="absolute top-[1150px] left-[125px] text-9xl font-semibold font-inter text-black inline-block w-[383px] h-9">
        Skills
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1755px] h-[509px] text-base text-gray-300 font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 box-border w-[1280px] h-[150px] border-[1.5px] border-solid border-darkgray-200" />
        <div className="absolute top-[90px] left-[958px] w-[119px] h-[58px]">
          <div className="absolute h-full w-[73.11%] top-[0%] right-[17.65%] bottom-[0%] left-[9.24%] bg-gray-100" />
          <div className="absolute h-[43.1%] w-[64.71%] top-[56.9%] left-[17.65%] font-medium inline-block">
            Message
          </div>
          <img
            className="absolute h-2/5 w-[21.09%] top-[17.24%] right-[43.61%] bottom-[42.76%] left-[35.29%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
        <div className="absolute top-[76px] left-[1056px] w-[699px] h-[433px] text-lg">
          <div className="absolute top-[0px] left-[1px] w-[88px] h-[70px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
            <div className="absolute h-[42.86%] w-[37.5%] top-[61.43%] left-[22.73%] font-medium inline-block">
              Me
            </div>
            <img
              className="absolute h-2/5 w-[35.23%] top-[17.14%] right-[32.95%] bottom-[42.86%] left-[31.82%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/group@2x.png"
            />
            <img
              className="absolute h-[34.29%] w-[27.27%] top-[65.71%] right-[12.5%] bottom-[0%] left-[60.23%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/riarrowdownsfill@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[90px] left-[603px] w-[74px] h-[58px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
          <div className="absolute h-[42.93%] w-[69.32%] top-[57.07%] left-[14.73%] font-medium inline-block">
            Home
          </div>
          <img
            className="absolute h-[37.07%] w-[30.68%] top-[12.93%] right-[35.27%] bottom-[50%] left-[34.05%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
        <div className="absolute top-[88px] left-[789px] w-[74px] h-[58px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
          <div className="absolute h-[42.93%] w-[60.27%] top-[57.07%] left-[19.32%] font-medium inline-block">
            Jobs
          </div>
          <img
            className="absolute h-[32.93%] w-[34.05%] top-[17.07%] right-[32.97%] bottom-[50%] left-[32.97%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
        <div
          className="absolute top-[90px] left-[674px] w-[119px] h-[58px] cursor-pointer"
          onClick={onNeteorkContainerClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
          <div className="absolute h-[42.93%] w-[80.92%] top-[57.07%] left-[9.5%] font-medium inline-block">
            My Network
          </div>
          <img
            className="absolute h-2/5 w-[21.09%] top-[10%] right-[39.41%] bottom-[50%] left-[39.5%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
        <img
          className="absolute top-[76px] left-[12px] w-12 h-12 object-cover"
          alt=""
          src="/unnamed-2@2x.png"
        />
        <div className="absolute top-[89px] left-[69px] font-semibold font-sarabun text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6969b0,_rgba(101,_113,_182,_0.75)_44.27%,_rgba(97,_124,_189,_0.6))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block w-[111px] h-5">
          CareerConnect
        </div>
        <div className="absolute top-[71px] left-[199px] rounded-3xs bg-gainsboro w-[361px] h-[57px]" />
        <div
          className="absolute top-[90px] left-[256px] text-lg font-sora text-dimgray-200 inline-block w-[200px] h-[29px] cursor-pointer"
          onClick={onSearchPositionsTextClick}
        >
          Search positions
        </div>
        <img
          className="absolute top-[83px] left-[210px] w-[35px] h-[33px] overflow-hidden object-cover"
          alt=""
          src="/basilsearchoutline@2x.png"
        />
        <div className="absolute top-[90px] left-[856px] w-[119px] h-[58px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-100" />
          <div className="absolute h-[43.1%] w-[89.08%] top-[56.9%] left-[5.88%] font-medium inline-block">
            Notifications
          </div>
          <img
            className="absolute h-[38.62%] w-[15.55%] top-[11.38%] right-[41.93%] bottom-[50%] left-[42.52%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
