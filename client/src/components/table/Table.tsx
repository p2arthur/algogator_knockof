import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ITableProps } from "./table_types";
import { useFetchAssetsQuery } from "../../store";

export default function Table({
  rowData,
  columnDefs,
  theme,
  props,
}: ITableProps) {

  const { data, error, isLoading } = useFetchAssetsQuery();

  const [rowsData, setRowsData] = useState(data);
  const [columnsDefs, setColumnsDefs] = useState([{ field: 'asset_id' }, { field: 'unit_name' }, { field: 'name' }, { field: 'price' }, { field: "tvl_change_24h" }, { field: "price_change_24h" }]);



  const onGridReady = (event) => {
    setTimeout(() => event.api.sizeColumnsToFit());
  };

  return (
    <div className={`ag-theme-alpine-dark h-96 w-full ${theme}`} >
      <AgGridReact
        {...props}
        rowData={rowsData}
        columnDefs={columnsDefs}
      />
    </div>
  );
}
