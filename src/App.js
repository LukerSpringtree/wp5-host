import React from "react";
// import NewsList from "./NewsList";
const RemoteNewsList = React.lazy(()=> import('remote/NewsList'))


export default () => {
  return (
    <>
      <h3>Host Page</h3>
      {/* <NewsList /> */}
      <br />
      <React.Suspense fallback="Loading NewList...">
        <RemoteNewsList/>
      </React.Suspense>
    </>
  );
};
