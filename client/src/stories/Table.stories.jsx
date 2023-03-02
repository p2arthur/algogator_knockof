import Table from "../components/table/Table";
import { Provider } from "react-redux";
import { store } from "../store";

export default {
  title: "Components/Tables/Table",
  component: Table,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rowData: [
    { make: "Ford", model: "Focus", price: 40000 },
    { make: "Toyota", model: "Hilux", price: 50000 },
    { make: "Honda", model: "Civic", price: 60000 },
  ],
  columnDefs: [{ field: "make" }, { field: "model" }, { field: "price" }],
  theme: "ag-theme-alpine-dark",
};
