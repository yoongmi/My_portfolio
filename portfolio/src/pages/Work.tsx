import { useState } from "react";
import { useMatch } from "react-router-dom";
import styled from "styled-components";
//components
import WorkList from "../components/WorkList";

//data
import { pubFilter, portfolio, Iport, code_portfolio, dark } from "../data/list";

const Work = () => {
    const Catepub = useMatch("/work/pub");
    const CatepubGame = useMatch("/work/game");
    const portList = JSON.parse(JSON.stringify(portfolio));
    const [pub, setPub] = useState("four");
    const pubList = portList.filter((item: Iport) => item.class.includes(pub));
    const [pubCatelength, setPubCatelength] = useState<number[]>([]);

    for (let i = 0; i < pubFilter.length; i++) {
        pubCatelength[i] = portList.filter((item: Iport) => item.class.includes(pubFilter[i].name)).length;
    }

    return (
        <Container>
            {Catepub && (
                <>
                    <Ul>
                        {pubFilter.map((item, i) => (
                            <Li key={item.id} className={pub === `${item.name}` ? "active" : ""} onClick={() => setPub(`${item.name}`)}>
                                {item.cate} ({item.id === 9 ? code_portfolio.length : pubCatelength[i]})
                            </Li>
                        ))}
                    </Ul>

                    {pub === "four" ? <WorkList data={code_portfolio} pub={pub} /> : <WorkList data={pubList} pub={pub} />}
                </>
            )}
            {CatepubGame && <WorkList data={dark} pub={pub} />}
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    border: 0 solid #fff;
    padding: 40px 20px;
    min-height: calc(100vh - 57px);
    background-color: #1f1f1f;
    box-sizing: border-box;
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;
const Li = styled.li`
    color: #fff;
    cursor: pointer;
    margin-right: 30px;
    padding: 5px 0;
    a {
        color: #fff;
    }
    &:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 10px;
        height: 10px;
        margin-top: -4px;
        margin-right: 5px;
        border: 1px solid #fff;
        box-sizing: border-box;
    }
    &.active:before {
        background-color: #fff;
    }
`;

export default Work;
