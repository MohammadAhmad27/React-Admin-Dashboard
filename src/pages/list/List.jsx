import React from 'react'
import "./list.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/datatable/DataTable'

export default function List() {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
             <DataTable />
            </div>
        </div>
    )
}
