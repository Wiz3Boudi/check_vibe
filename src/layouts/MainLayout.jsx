import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <h1>Hello this is the Nav bar</h1>
      <Outlet>
        <h2>This thi form the outlet </h2>
      </Outlet>
      <p>Hello this is the footer</p>
    </>
  );
}
