import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthorizationContainer from './AuthorizationContainer'

const LoginSwapper = () => {
  return (
    <>
      <AuthorizationContainer>
        <Outlet />
      </AuthorizationContainer>

    </>
  )
}

export default LoginSwapper
