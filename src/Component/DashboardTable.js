import axios from "axios";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useState } from "react";
import tableIcons from "./IconProvider";

function DashboardTable() {
  const host = "https://whitetales.herokuapp.com";

  const [bookedData, setBookedData] = useState([]);

  const getApiDate = async () => {
    try {
      await axios.get(`${host}/contact/get-leads`).then((res) => {
        console.log(res.data, "get data =========");
        setBookedData(res.data);
      });
    } catch (e) {}
  };

  useEffect(() => {
    getApiDate();
  }, []);

  const columns = [
    { title: "ID", field: "_id"},
    { title: "Full Name", field: "fullName" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Date", field: "date" },
  ];
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        title="Entries"
        columns={columns}
        data={bookedData}
      />
    </div>
  );
}

export default DashboardTable;
