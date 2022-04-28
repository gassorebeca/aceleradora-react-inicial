import styled from "styled-components";
import {useState} from "react";

const AnimalDiv = styled.div`
  display: block;
  font-size: 40px;
`

const AnimalButton = styled.button`
  background: red;
  cursor: pointer;
`;

const AnimalComponent = (props) => {
    const [animalColor, setAnimalColor] = useState("rosa");

    return (
        <>
            <AnimalDiv>
                {props.animalType} cor {animalColor}
            </AnimalDiv>
            <AnimalButton onClick={() => setAnimalColor("verde") }>
                Trocar cor do animal
            </AnimalButton>
        </>
    )
};

export default AnimalComponent;