import styled from "styled-components";


const SearchResult = () => {
  return(
    <FoodCardsContainer>
    <FoodCards>

    </FoodCards>
  </FoodCardsContainer>
  );
}

export default SearchResult;

const FoodCardsContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  height: calc(100vh - 200px);
`;


const FoodCards = styled.div``;


