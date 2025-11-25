import styled from 'styled-components'
import { useEffect, useState } from 'react';
import SearchResult from './Components/SearchResult.jsx';


export const BASE_URL = "http://localhost:5000"

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");


  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fecth data")
      }
    };
    fetchFoodData();
  },[]);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    } 

    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  }

  const filterFood = (type) => {

    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  }

  if(error) return <div>{error}</div>;
  if(loading) return <div>loading...</div>

  return (
    <>
      <Container>

        <TopContainer>
          <div className="logo">
            <img src="/Foody Zone.svg" alt="" />
          </div>
          <div className="search">
            <input onChange={searchFood} type="text" placeholder='Search Food...' />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button onClick={() => filterFood("all")}>All</Button>
          <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button>
        </FilterContainer>
        
      </Container>
      <SearchResult data = {filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
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

export const Button = styled.button`
  background: #FF4343;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #e51818;
  }
`;

