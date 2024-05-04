import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import RecipeCard from "./components/cards/RecipeCard";
import SearchBar from "./components/Form/SearchBar";
import Layout from "./components/layout/layout";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <Layout>
      <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {recipe
            ? recipe.map((r, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <RecipeCard key={r.idMeal} recipe={r} />
              </Grid>
            ))
            : "No Products"}
        </Grid>
      </Box>
    </Layout>
  );
};

export default HomePage; 