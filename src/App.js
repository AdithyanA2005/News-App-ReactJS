import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import News from "./components/News";

export default function App() {
  return (
    // TODO: Change all navlinks to a dropdown called categories
    // TODO: Add language dropdown lo navbar
    // TODO: Add country dropdown to navbar
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News title="Trending News" />} />

          <Route path="/business" element={<News title="Business" category="business" />} />
          <Route
            path="/entertainment"
            element={<News title="Entertainment" category="entertainment" />}
          />
          <Route path="/general" element={<News title="General" category="general" />} />
          <Route path="/health" element={<News title="Health" category="health" />} />
          <Route path="/science" element={<News title="Science" category="science" />} />
          <Route path="/sports" element={<News title="Sports" category="sports" />} />
          <Route path="/technology" element={<News title="Technology" category="technology" />} />
        </Route>
      </Routes>
    </>
  );
}
