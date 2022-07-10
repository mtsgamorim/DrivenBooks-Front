import styled from "styled-components";
import Header from "../shared/Header";
import TypeBookSeparation from "./TypeBookSeparation";



export default function HomePage() {
  const types = ["Aventura", "Misterio", "Romance", "Terror"];
  return (
    <HomePageStyle>
      <Header />
      <MarginHeader />
      {types.map((item, index) => (
        <TypeBookSeparation key={index} type={item} />
      ))}
    </HomePageStyle>
  );
}

const MarginHeader = styled.div`
  margin-top: 90px;
`;

const HomePageStyle= styled.div`
  display: flex;
  flex-direction:column;
  align-items: center ;
  justify-content: center;
  width: 100%;
  color:var(--color-bg-input);
  padding:10px;
  @media (max-width: 767px) {
    width:100%;
  }
`;