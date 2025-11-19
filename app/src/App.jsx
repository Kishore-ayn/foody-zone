import styled from 'styled-components'
import { useEffect, useState } from 'react';
import SearchResult from './Components/SearchResult.jsx';


const BASE_URL = "http://localhost:5000/"

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fecth data")
      }
    };
    fetchFoodData();
  },[]);



  if(error) return <div>{error}</div>;
  if(loading) return <div>loading...</div>

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

      <SearchResult />


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

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 30px;
`;

const Button = styled.button`
  background: #FF4343;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;;
`;

