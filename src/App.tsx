import React, { useState, useEffect } from "react";
import { Column } from "react-table";
import Table from "./core/table/Table";

interface IData {
  name: string;
  username: string;
  phone: string;
  email: string;
  company: string;
  gender: "Male" | "Female" | "Other";
}
function App() {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    fetch("/fixtures/MOCK_DATA.json")
      .then((res) => res.json())
      .then((d: IData[]) => {
        setData(d);
      });
  }, []);
  const columns: Column<IData>[] = [
    { Header: "Name", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Username", accessor: "username" },
    { Header: "Phone", accessor: "phone" },
    { Header: "Gender", accessor: "gender" },
    { Header: "Company", accessor: "company" },
  ];
  console.log("here");
  return (
    <div className="App">
      <Table<IData>
        data={data}
        columns={columns}
        initialState={{ pageIndex: 0, pageSize: 20 }}
      />
    </div>
  );
}

export default App;
