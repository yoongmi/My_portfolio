import "../style/work.css";
import { Iport } from "../data/list";
import Popup from "./Popup";
import { useState, useEffect } from "react";

interface IData {
    data: Iport[];
    pub: string;
    state: boolean;
}
const WorkList = ({ data, pub, state }: IData) => {
    const [popup, setPopup] = useState<boolean>(false);
    const [imglink, setImglink] = useState<string>("");
    const handleClick = (e: any) => {
        setPopup(true);
        setImglink(e.target.dataset.src);
    };
    // preloadedImagea
    const totalImages = data.length;
    const arrImg = Array.from({ length: totalImages }, (_, index) => `/My_portfolio${data[index].thumb}`);
    const [isStarted, setIsStarted] = useState(state);
    const [num, setNum] = useState(0);

    useEffect(() => {
        let interval: any;
        if (isStarted) {
            interval = setInterval(() => {
                setNum((prevNum) => {
                    if (prevNum >= totalImages) {
                        clearInterval(interval);
                        setIsStarted(false);
                        return prevNum;
                    }
                    return prevNum + 1;
                });
            }, 30);
        }

        return () => clearInterval(interval);
    }, [isStarted, totalImages]);

    return (
        <>
            <ul className="workList">
                {/* {arrImg.slice(0, num).map((item: string, index: number) => (
                    <li key={item}>
                        <div className={data[index].state === "mobile" ? "img_box mo_img_box" : "img_box"}>
                            {data[index].state === "mobile" ? <img src="/My_portfolio/img/phone.png" alt="모바일" /> : <img src="/My_portfolio/img/pc.png" alt="모니터" />}
                            <i onClick={(e) => handleClick(e)} data-src={item}>
                                <img src={item} alt="" />
                            </i>
                        </div>
                        <div className="txt_box">
                            <h5>{data[index].title}</h5>
                            <p>{data[index].desc}</p>
                            {data[index].link === "" ? (
                                ""
                            ) : (
                                <a href={data[index].link} target={data[index].target} rel="noreferrer">
                                    site view
                                </a>
                            )}
                        </div>
                    </li>
                ))} */}
                {data.map((item: Iport) => (
                    <li key={item.id}>
                        <div className={item.state === "mobile" ? "img_box mo_img_box" : "img_box"}>
                            {item.state === "mobile" ? <img src="/My_portfolio/img/phone.png" alt="모바일" /> : <img src="/My_portfolio/img/pc.png" alt="모니터" />}
                            <i onClick={(e) => handleClick(e)} data-src={"/My_portfolio" + item.thumb}>
                                <img src={`/My_portfolio${item.thumb}`} alt="" />
                            </i>
                        </div>
                        <div className="txt_box">
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                            {item.link === "" ? (
                                ""
                            ) : (
                                <a href={item.link} target={item.target} rel="noopener noreferrer">
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
