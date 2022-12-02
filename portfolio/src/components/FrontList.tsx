import styled from "styled-components";
import { Iproject, project } from "../data/front";

const FrontList = () => {
  return (
    <>
      <Listbox>
        {project.map((item: Iproject) => (
          <List key={item.id}>
            <Img src={item.thumb} alt={item.title} />
            <Text>
              <Title>{item.title}</Title>
              <Skills>
                {item.skill.map((item: string, i: number) => (
                  <Skill key={i}>{item}</Skill>
                ))}
              </Skills>
              <Link href={item.link} target="_blank">
                site view
              </Link>
            </Text>
          </List>
        ))}
      </Listbox>
    </>
  );
};
const Listbox = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media all and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const List = styled.li`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 15px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffd78e;
  background-color: #424242;
  padding: 10px;
  color: #fff;
  @media all and (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.div`
  padding: 10px 0;
`;
const Title = styled.p`
  font-size: 1.7em;
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;
const Skill = styled.span`
  padding: 4px 10px;
  margin: 3px 5px 3px 0;
  background-color: #000;
  border-radius: 5px;
`;
const Link = styled.a`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #fff;
  color: #fff;
`;
export default FrontList;
