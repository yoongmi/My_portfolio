import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
//components
import FrontList from "../components/FrontList";
import WorkList from "../components/WorkList";
//data
import { pubFilter, portfolio, Iport, publength } from "../data/list";
import { projectLength } from "../data/front";

const Work = () => {
  const Catefront = useMatch("/work/front");
  const Catepub = useMatch("/work/pub");
  const portList = JSON.parse(JSON.stringify(portfolio));
  const [pub, setPub] = useState("");
  const pubList = portList.filter((item: Iport) => item.class.includes(pub));
  const [pubCatelength, setPubCatelength] = useState<number[]>([]);
  for (let i = 0; i < pubFilter.length; i++) {
    pubCatelength[i] = portList.filter((item: Iport) =>
      item.class.includes(pubFilter[i].name)
    ).length;
  }
  return (
    <Container>
      <Ul>
        <Li className={Catefront ? "active" : ""}>
          <Link to="/work/front">프론트엔드 ({projectLength})</Link>
        </Li>
        <Li className={Catepub ? "active" : ""}>
          <Link to="/work/pub">퍼블리싱 ({publength})</Link>
        </Li>
      </Ul>
      <Hr />
      {Catefront && (
        <>
          <Ul>
            <Li className="active">개인프로젝트 ({projectLength})</Li>
          </Ul>
          <FrontList />
        </>
      )}
      {Catepub && (
        <>
          <Ul>
            {pubFilter.map((item, i) => (
              <Li
                key={item.id}
                className={pub === `${item.name}` ? "active" : ""}
                onClick={() => setPub(`${item.name}`)}
              >
                {item.cate} ({pubCatelength[i]})
              </Li>
            ))}
          </Ul>
          <WorkList data={pubList} pub={pub} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  border: 10px solid #fff;
  padding: 50px 20px;
  min-height: calc(100vh - 57px);
  background-color: #1f1f1f;
  box-sizing: border-box;
`;
const Hr = styled.i`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #646464;
  margin: 20px 0;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const Li = styled.li`
  color: #fff;
  cursor: pointer;
  margin-right: 30px;
  padding: 3px 0;
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
