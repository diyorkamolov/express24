import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/layout";

function FoodById() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [switchState, setSwitchState] = useState("olib ketish");

  const fetchRecipe = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      if (data.meals && data.meals.length > 0) {
        setRecipe(data.meals[0]);
      } else {
        setRecipe(null);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipe(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  const switchStyles = {
    position: "relative",
    width: "201px",
    height: "48px",
    borderRadius: "14px",
    backgroundColor: "#ccc",
    overflow: "hidden",
    marginLeft: '90px',
    marginTop: '20px'
  };

  const switchIndicatorStyles = {
    position: "absolute",
    top: "2px",
    left: switchState === "yetkazish" ? "calc(100% - 14px)" : "0",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "left 0.3s ease-out",
  };

  const switchLabelStyles = {
    position: "absolute",
    top: "2px",
    left: "32px",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "24px",
    color: "#333",
    transition: "left 0.3s ease-out",
    transform: switchState === "yetkazish" ? "translateX(100%)" : "translateX(0)",
  };

  return (
    <Layout>
      <h2 style={{ fontSize: 24, fontWeight: "bold" }}>{recipe.strMeal}</h2>
      <div style={{ width: 1200, height: "400px", overflow: "hidden", borderRadius: "20px", marginTop: "90px", marginLeft: "4%" }}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: "100%", height: "540px", objectFit: "cover" }} />
      </div>
      <div style={switchStyles}>
        <div style={switchIndicatorStyles} />
        <div style={switchLabelStyles}>{switchState}</div>
        <div
          className="Indicator_pZUSL"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 14px",
          }}
        >
          <button
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: switchState === "yetkazish" ? "#ccc" : "#333",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setSwitchState(prevState => prevState === "yetkazish" ? "olib ketish" : "yetkazish")}
          >
            Yetkazish
          </button>
          <button
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: switchState === "olib ketish" ? "#ccc" : "#333",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setSwitchState(prevState => prevState === "olib ketish" ? "yetkazish" : "olib ketish")}
          >
            Olib ketish
          </button>
        </div>
      </div>
      <input
        type="search"
        placeholder="Search"
        style={{
          width: "62%",
          height: "7vh",
          borderRadius: "14px",
          border: "none",
          padding: "0 14px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          marginTop: "20px",
          marginLeft: "90px",
        }}
      />
      <div>
      <button style={{ marginTop: "40px" , width: '90px', height: '4vh', borderRadius: '10px', border: 'none', marginLeft: '90px'}}>
        Pizza
      </button>
      <button style={{ marginTop: "40px" , width: '90px', height: '4vh', borderRadius: '10px', border: 'none', marginLeft: '90px'}}>
        Fast Food 
      </button> <button style={{ marginTop: "40px" , width: '90px', height: '4vh', borderRadius: '10px', border: 'none', marginLeft: '90px'}}>
        Snacks
      </button> <button style={{ marginTop: "40px" , width: '90px', height: '4vh', borderRadius: '10px', border: 'none', marginLeft: '90px'}}>
        Drinks
      </button> <button style={{ marginTop: "40px" , width: '90px', height: '4vh', borderRadius: '10px', border: 'none', marginLeft: '90px'}}>
        Salads
      </button>
      </div>
    
    </Layout>
  );
}

export default FoodById;
