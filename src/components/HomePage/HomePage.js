import styled from "styled-components";
import { useContext, useState } from "react";

import Header from "../shared/Header";

import TypeBookSeparation from "./TypeBookSeparation";

import UserContext from "../../contexts/UserContext";

export default function HomePage() {
  const types = ["Aventura", "Misterio", "Romance", "Terror"];
  return (
    <>
      <Header />
      <MarginHeader />
      {types.map((item, index) => (
        <TypeBookSeparation key={index} type={item} />
      ))}
    </>
  );
}

const MarginHeader = styled.div`
  margin-top: 90px;
`;
