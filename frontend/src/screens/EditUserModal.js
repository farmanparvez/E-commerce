import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomModal from '../components/CustomModal'
import { setModalVisible } from '../redux/reducers/userReducer'
import UserEditScreen from './UserEditScreen'

const EditUserModal = () => {
    const { isVisible, modalData } = useSelector(state => state.user)
    console.log(isVisible)
    const dispatch = useDispatch()
  return (
    <CustomModal 
        show = {isVisible.visible}
        onHide={() => dispatch(setModalVisible(false))}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
    >
        {isVisible.type === 'editUser' && <UserEditScreen {...modalData} />}
    </CustomModal>
  )
}

export default EditUserModal