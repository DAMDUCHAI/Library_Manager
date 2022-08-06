
import { Button, Modal } from 'antd';

import { useSelector, useDispatch } from 'react-redux'
export default function ModalLibrary() {
    const dispatch=useDispatch()

    const {visibleModal, ComponentContenModal,title ,width,callBackSubmit} =useSelector(state => state.modalLibraryReducers);

  return (
    <>
    <Modal
      title={title}
      centered
      visible={visibleModal}
      onOk={callBackSubmit}
      onCancel={() =>    dispatch({
            type:'CLOSE_MODAL'
        })}
      width={width}
    >
 {ComponentContenModal}
    </Modal>
  </>
  )
}



