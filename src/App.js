import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import News from "./components/News";

export default function App() {
  return (
    // TODO: Enable navbar country dropdown
    // TODO: Disable sidebar on away click
    // TODO: Close Sidebar Dropdown on other dropdown active
    // TODO: Handle scrollbar light theme
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News language="en" title="Trending News" />} />
          <Route path="/category">
            <Route path="business" element={<News title="Business" category="business" />} />
            <Route
              path="entertainment"
              element={<News title="Entertainment" category="entertainment" />}
            />
            <Route path="general" element={<News title="General" category="general" />} />
            <Route path="health" element={<News title="Health" category="health" />} />
            <Route path="science" element={<News title="Science" category="science" />} />
            <Route path="sports" element={<News title="Sports" category="sports" />} />
            <Route path="technology" element={<News title="Technology" category="technology" />} />
          </Route>

          <Route path="/language">
            <Route path="ar" element={<News title="Arabic" language="ar" />} />
            <Route path="de" element={<News title="German" language="de" />} />
            <Route path="en" element={<News title="English" language="en" />} />
            <Route path="es" element={<News title="Spanish/Castilian" language="es" />} />
            <Route path="fr" element={<News title="French" language="fr" />} />
            <Route path="he" element={<News title="Hebrew" language="he" />} />
            <Route path="it" element={<News title="Italian" language="it" />} />
            <Route path="nl" element={<News title="Dutch/Flemish" language="nl" />} />
            <Route path="no" element={<News title="Norwegian" language="no" />} />
            <Route path="pt" element={<News title="Portuguese" language="pt" />} />
            <Route path="ru" element={<News title="Rundi" language="ru" />} />
            <Route path="se" element={<News title="Northern Sami" language="se" />} />
            <Route path="zh" element={<News title="Chinese" language="zh" />} />
          </Route>
          {/* <Route path="/country"></Route> */}
        </Route>
      </Routes>
    </>
  );
}
