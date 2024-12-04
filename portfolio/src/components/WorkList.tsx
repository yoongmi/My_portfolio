import "../style/work.css";
import { Iport } from "../data/list";
import Popup from "./Popup";
import { useState } from "react";

interface IData {
  data: Iport[];
  pub: string;
}
const WorkList = ({ data, pub }: IData) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [imglink, setImglink] = useState<string>("");
  const handleClick = (e: any) => {
    setPopup(true);
    setImglink(e.target.dataset.src);
  };
  return (
    <>
      <ul className="workList">
        {data.map((item: Iport) => (
          <li key={item.id}>
            <div className={item.state === "mobile" ? "img_box mo_img_box" : "img_box"}>
              {item.state === "mobile" ? <img src="/My_portfolio/img/phone.png" alt="모바일" /> : <img src="/My_portfolio/img/pc.png" alt="모니터" />}
              <i
                onClick={(e) => handleClick(e)}
                data-src={"/My_portfolio" + item.thumb}
                style={{ backgroundImage: `url(/My_portfolio${item.thumb})` }}
              ></i>
            </div>
            <div className="txt_box">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
              {item.link === "" ? (
                ""
              ) : (
                <a href={item.link} target={item.target} rel="noreferrer">
                  site view
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
      {popup && <Popup imgsrc={imglink} openpop={setPopup} />}
    </>
  );
};

export default WorkList;
