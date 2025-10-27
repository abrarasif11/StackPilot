import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <h2>AI Layout</h2>
      <Outlet />
    </div>
  );
};

export default Layouts;
