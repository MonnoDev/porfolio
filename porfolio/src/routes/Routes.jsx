import { Routes, Route } from "react-router-dom";
import { porfolioRoutes } from "./const";

const MyRoutes = () => {
  return (
    <Routes>
      {porfolioRoutes.routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <porfolioRoutes.Layout>
              <Component />
            </porfolioRoutes.Layout>
          }
        />
      ))}
    </Routes>
  );
};

export default MyRoutes;
