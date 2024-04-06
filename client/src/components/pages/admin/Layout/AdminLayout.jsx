import React from 'react'
import Topbar from '../../../bar/Topbar'
import { Outlet } from 'react-router-dom'
import ContentContainer from './ContentContainer'

const AdminLayout = () => {
    return (
        <>
            <Topbar />
            <ContentContainer>
                <Outlet/>
            </ContentContainer>
            
        </>
    )
}

export default AdminLayout
