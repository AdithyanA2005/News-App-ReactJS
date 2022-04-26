import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import News from "./components/News";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<News language="en" title="Trending" />} />
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

          <Route path="/country">
            <Route path="ae" element={<News title="UAE	" country="ae" />} />
            <Route path="ar" element={<News title="Argentina" country="ar" />} />
            <Route path="at" element={<News title="Austria" country="at" />} />
            <Route path="au" element={<News title="Australia" country="au" />} />
            <Route path="be" element={<News title="Belgium" country="be" />} />
            <Route path="bg" element={<News title="Bulgaria" country="bg" />} />
            <Route path="br" element={<News title="Brazil" country="br" />} />
            <Route path="ca" element={<News title="Canada" country="ca" />} />
            <Route path="ch" element={<News title="Switzerland" country="ch" />} />
            <Route path="cn" element={<News title="China" country="cn" />} />
            <Route path="co" element={<News title="Colombia" country="co" />} />
            <Route path="cu" element={<News title="Cuba" country="cu" />} />
            <Route path="cz" element={<News title="Czech Republic" country="cz" />} />
            <Route path="de" element={<News title="Germany" country="de" />} />
            <Route path="eg" element={<News title="Egypt" country="eg" />} />
            <Route path="fr" element={<News title="France" country="fr" />} />
            <Route path="gb" element={<News title="United Kingdom" country="gb" />} />
            <Route path="gr" element={<News title="Greece" country="gr" />} />
            <Route path="hk" element={<News title="Hong Kong" country="hk" />} />
            <Route path="hu" element={<News title="Hungary" country="hu" />} />
            <Route path="id" element={<News title="Indonesia" country="id" />} />
            <Route path="ie" element={<News title="Ireland" country="ie" />} />
            <Route path="il" element={<News title="Israel" country="il" />} />
            <Route path="in" element={<News title="India" country="in" />} />
            <Route path="it" element={<News title="Italy" country="it" />} />
            <Route path="jp" element={<News title="Japan" country="jp" />} />
            <Route path="kr" element={<News title="South Korea" country="kr" />} />
            <Route path="lt" element={<News title="Lithuania" country="lt" />} />
            <Route path="lv" element={<News title="Latvia" country="lv" />} />
            <Route path="ma" element={<News title="Morocco" country="ma" />} />
            <Route path="mx" element={<News title="Mexico" country="mx" />} />
            <Route path="my" element={<News title="Malaysia" country="my" />} />
            <Route path="ng" element={<News title="Nigeria" country="ng" />} />
            <Route path="nl" element={<News title="Netherlands" country="nl" />} />
            <Route path="no" element={<News title="Norway" country="no" />} />
            <Route path="nz" element={<News title="New Zealand" country="nz" />} />
            <Route path="ph" element={<News title="Philippines" country="ph" />} />
            <Route path="pl" element={<News title="Poland" country="pl" />} />
            <Route path="pt" element={<News title="Portugal" country="pt" />} />
            <Route path="ro" element={<News title="Romania" country="ro" />} />
            <Route path="rs" element={<News title="Serbia" country="rs" />} />
            <Route path="ru" element={<News title="Russia" country="ru" />} />
            <Route path="sa" element={<News title="Saudi Arabia" country="sa" />} />
            <Route path="se" element={<News title="Sweden" country="se" />} />
            <Route path="sg" element={<News title="Singapore" country="sg" />} />
            <Route path="si" element={<News title="Slovenia" country="si" />} />
            <Route path="sk" element={<News title="Slovakia" country="sk" />} />
            <Route path="th" element={<News title="Thailand" country="th" />} />
            <Route path="tr" element={<News title="Turkey" country="tr" />} />
            <Route path="tw" element={<News title="Taiwan" country="tw" />} />
            <Route path="ua" element={<News title="Ukraine" country="ua" />} />
            <Route path="us" element={<News title="United States" country="us" />} />
            <Route path="ve" element={<News title="Venezuela" country="ve" />} />
            <Route path="za" element={<News title="South Africa" country="za" />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
