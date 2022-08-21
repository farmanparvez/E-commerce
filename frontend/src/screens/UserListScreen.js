import React, { useEffect } from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
// import { listUsers } from '../actions/userActions'
import { getUsers, deleteUser } from '../redux/actions/userActions'
import Container from '../components/Container'
import { openNotification } from "../utils/notification"
import { setModalVisible } from '../redux/reducers/userReducer'
import EditUserModal from './EditUserModal'

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.user)
  const { isLoading:loading, error, users, userInfo, stateUpdated, isMessage, isSuccess, isError, isVisible } = userList
  console.log(isVisible)
  // const userLogin = useSelector((state) => state.user)
  // const { userInfo } = userLogin

  // const userDelete = useSelector((state) => state.userDelete)
  // const { success: successDelete } = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUsers())
    } 
    // else {
    //   history.push('/login')
    // }
    if(isSuccess) openNotification('success', 'Success', isMessage)
    if(isError) openNotification('error', 'error', isMessage)
    if(stateUpdated) dispatch(getUsers())
    // return () => dispatch(reset())
  }, [dispatch, history, userInfo, stateUpdated, isMessage, isSuccess, isError])

  const deleteHandler = (id) => {
    // console.log(id)
    if (window.confirm('Are you sure')) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <Container>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  {/* <LinkContainer to={`/admin/user/${user._id}/edit`}> */}
                    <Button variant='light' className='btn-sm'
                       onClick={() => dispatch(setModalVisible({ type: 'editUser', visible: true, data: user }))}>
                      <i className='fas fa-edit'></i>
                    </Button>
                  {/* </LinkContainer> */}
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {isVisible && <EditUserModal />}
    </Container>
  )
}

export default UserListScreen
