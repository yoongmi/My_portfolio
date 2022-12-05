import "../style/work.css";
import { Iport } from "../data/list";

interface IData {
  data: Iport[];
  pub: string;
}
const WorkList = ({ data, pub }: IData) => {
  return (
    <>
      <ul className="workList">
        {data.map((item: Iport) => (
          <li key={item.id}>
            <div className="img_box">
              <img src="/My_portfolio/img/pc.png" alt="모니터" />
              <i
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
    </>
  );
};

export default WorkList;
