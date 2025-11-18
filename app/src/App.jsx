import styled from 'styled-components'

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/Foody Zone.svg" alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder='Search Food...' />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;  

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    input{
      background-color: transparent;
      color: white;
      border: 1px solid red;
      height: 40px;
      width: 285px;
      padding: 10px;
      border-radius: 5px;
      font-size: 16px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const Button = styled.button`
  background: #FF4343;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;;
`;


