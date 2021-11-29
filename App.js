import React, { useEffect, useState } from "react";
import Layout from "./components/layout";
import Empty from "./pages/empty";
import NewFriend from "./pages/newFriend";
import NewGift from "./pages/newGift";
import List from "./pages/list";
import { ViewContext } from "./context";
import { storage } from "./storage";

export default function App() {
  const [currentView, setCurrentView] = useState("list");
  const [title, setTitle] = useState("Chá de Casa Nova");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetch() {
      const stored = await storage.get();
      setData(stored);
    }

    if (!data) fetch();
  });

  return (
    <ViewContext.Provider
      value={{ currentView, setCurrentView, title, setTitle, setData, data }}
    >
      <Layout>
        {currentView === "empty" ? (
          <Empty />
        ) : currentView === "new-gift" ? (
          <NewGift />
        ) : currentView === "new-friend" ? (
          <NewFriend />
        ) : data && data.length && currentView === "list" ? (
          <List data={data} />
        ) : (
          <></>
        )}
      </Layout>
    </ViewContext.Provider>
  );
}
