import React, { useState } from 'react'
import Layout from './Layout'
import DataTable from "react-data-table-component";

const Datatable = () => {
    const [data, setData] = useState([
        { id: 1, name: "John", age: 25, city: "New York" },
        { id: 2, name: "Alice", age: 30, city: "Los Angeles" },
        { id: 3, name: "Bob", age: 28, city: "Chicago" },
        // Add more data as needed
    ]);

    const [columns] = useState([
        {
            name: "ID",
            selector: "id",
            sortable: true,
        },
        {
            name: "Name",
            selector: "name",
            sortable: true,

        },
        {
            name: "Age",
            selector: "age",
            sortable: true,
        },
        {
            name: "City",
            selector: "city",
            sortable: true,
        },
    ]);

    const [nameFilter, setNameFilter] = useState("");
    const [cityFilter, setCityFilter] = useState("");

    const handleFilterByName = (e) => {
        setNameFilter(e.target.value);
    };

    const handleFilterByCity = (e) => {
        setCityFilter(e.target.value);
    };

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
            item.city.toLowerCase().includes(cityFilter.toLowerCase())
    );


    return (
        <Layout>
            <div id="colorlib-main">
                <input
                    type="text"
                    placeholder="Filter by Name"
                    value={nameFilter}
                    onChange={handleFilterByName}
                />
                <input
                    type="text"
                    placeholder="Filter by City"
                    value={cityFilter}
                    onChange={handleFilterByCity}
                />

                <DataTable
                    title="User Data"
                    columns={columns}
                    data={filteredData}
                    pagination
                    highlightOnHover
                    selectableRows
                />
            </div>
        </Layout>
    )
}

export default Datatable
