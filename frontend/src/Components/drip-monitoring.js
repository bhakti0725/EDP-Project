import React,{useState} from "react";
import temp from "../Images/temp.png";
import temp1 from "../Images/temp1.png";
import temp2 from "../Images/temp3.png";
import up from "../Images/up.png";
import dn from "../Images/down.png";
import colour from "../Images/Vector 4.png";
export default function DripMonitoring() {
  const [count, setCount] = useState(500);

  return (
    <div className="bg-[white] p-2 rounded-xl  border border-sky-500 mx-3 mb-3">

      <h1 className="text-lg text-start font-normal border-b-2 border-zinc-300 text-[#4c4c4c]">
        Drip Monitoring
      </h1>
      <div className="flex justify-between p-2">
        <div>
          <div className="flex">
            <h3 className="text-start text-base text-[#707070] ">
              <span className="text-5xl font-bold text-[#348acf]">57</span>
              mL/h &nbsp;&nbsp;&nbsp;&nbsp;
            </h3>
           
          </div>
          <p className="text-start text-sm text-[#707070] mt-2">
            Last monitored:
          </p>
          <p className="text-start text-sm text-[black] font-bold">
            60 mins ago
          </p>
          <p className="text-start text-sm text-[#707070] mt-2">
            Last monitored:
          </p>
          <p className="text-start text-sm text-[black] font-bold">
            60 mins ago
          </p>
        </div>
        <div className="flex gap-2 border-2 p-1 rounded-md">
          <div className="pt-3 pl-2">
            <div className="border-2 border-blue-200 rounded-md">
              <input className="text-[#939393] font-bold text-xs mx-4 my-1 pt-3">
                
              </input>
            </div>
            <div className="flex mt-10 mb-5">
              <img className="w-2/5" src={temp1} />
              <p className="text-[#939393] mt-5">gtt/mL</p>
            </div>
          </div>
          <div className="flex gap-2 mr-2">
            <div className="my-5">
              <img alt="up"
                  className="my-5 w-6 h-6 mt-2"
                  onClick={() => {
                    setCount(count + 1);
                  }}
              src={up} />
              <p className="bg-[#dbdbdb]">95</p>
              <img alt="down"
                  className="my-5 w-6 h-6 mt-2"
                  onClick={() => {
                    setCount(count - 1);
                  }}src={dn} />
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "1rem",
            width: "100%",
          }}
        >
          <div>
            <p
              style={{ width: "30px", textAlign: "center", fontWeight: "500" }}
            >
              10{" "}
            </p>
          </div>

          <div
            style={{ flex: 1, height: "1.5px", backgroundColor: "#f0f0f0" }}
          />
          <div>
            <img className="w-1/2 " src={temp2} />
          </div>
          <div
            style={{ flex: 1, height: "1.5px", backgroundColor: "#f0f0f0" }}
          />
          <div>
            <p
              style={{ width: "30px", textAlign: "center", fontWeight: "500" }}
            >
              20{" "}
            </p>
          </div>
          <div
            style={{ flex: 1, height: "1.5px", backgroundColor: "#f0f0f0" }}
          />
          <div>
            <p
              style={{ width: "30px", textAlign: "center", fontWeight: "500" }}
            >
              60{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between p-1">
            <p className="text-sm text-[#4c4c4c] font-medium">SET</p>
            <p className="text-sm text-[#939393]">gtt/mL</p>
        </div>
      </div>
    </div>
  );
}