import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
//components
import WorkList from "../components/WorkList";

//data
import { pubFilter, portfolio, Iport, publength } from "../data/list";
import { code_portfolio } from "../data/code_list"

const Work = () => {
  const Catepub = useMatch("/work/pub");
  const portList = JSON.parse(JSON.stringify(portfolio));
  const [pub, setPub] = useState("four");
  const pubList = portList.filter((item: Iport) => item.class.includes(pub));
  const [pubCatelength, setPubCatelength] = useState<number[]>([]);
  for (let i = 0; i < pubFilter.length; i++) {
    pubCatelength[i] = portList.filter((item: Iport) =>
      item.class.includes(pubFilter[i].name)
    ).length;
  }
  const [load,setLoad] = useState(true)
  const listLoad = ()=>{
    setLoad(true);

    setTimeout(()=>{
      setLoad(false)
    },3000)
  }
  return (
    <Container>
      {Catepub && (
        <>
          <Ul>
            {pubFilter.map((item, i) => (
              <Li
                key={item.id}
                className={pub === `${item.name}` ? "active" : ""}
                onClick={() => {setPub(`${item.name}`); listLoad(); }}
              >
                {item.cate} ({item.id===9 ? code_portfolio.length :pubCatelength[i]})
              </Li>
            ))}
          </Ul>

          {/* {load && <Loading>
              <div>
                <Text>Loading....</Text>
                <Icon className={load?"active":""}><span></span></Icon>
              </div>
            </Loading>} */}

          {pub === "four" ? 
            <>
              <WorkList data={code_portfolio} pub={pub} />
            </>
            : 
            <WorkList data={pubList} pub={pub} />
          }
           
          
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position:relative;
  border: 0 solid #fff;
  padding: 40px 20px;
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
const Loading = styled.div`
  z-index:10;
  position:absolute;
  left:0; top:70px;
  width:100%;
  height:calc(100% - 70px);
  background:#1f1f1f;
  & > div {
    position:absolute;
    left:0; top:50vh;
    width:100%; 
    text-align:center;
  }
`;
const Icon = styled.div`
  position:relative;
  width:300px; max-width:90%;
  height:35px;
  margin:10px auto 0;
  border:3px solid #fff; 
  border-radius:10px;
  & span {
    position:absolute;
    left:3px; top:3px; 
    width:0px; height:calc(100% - 6px);
    background-color:#ffd78e;
    border-radius:5px; 
    box-sizing:border-box;
    transition:all 3s;
  }
  &.active span {
    width:calc(100% - 6px); 
    transition:all 3s;
  }
`;
const Text = styled.div`
  font-size:20px;
  color:#fff;
  font-weight:bold;
  letter-spacing:0.3em;
`;

export default Work;
