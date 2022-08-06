import React from 'react'
import { Drawer, Button, } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
export default function DrawerLibrary() {
    const { visible, ComponentContentDrawer,callBackSubmit,title,widthDrawer ,childrenDrawer,ComponentContentChildDrawer} = useSelector(state => state.drawerLibraryReducer);
    
    const dispatch = useDispatch();


   
    
      const onChildrenDrawerClose = () => {
        dispatch({ type: 'CHILDRENT_DRAWER' });
      };
      const onClose = () => {
        dispatch({ type: 'CLOSE_DRAWER' });
      };
  return (
    <>
    <Drawer
        title={title}
        width={widthDrawer}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}


        
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                </Button>
                <Button onClick={callBackSubmit} type="primary">
                    Submit
                </Button>
            </div>
        }
    >
  
<Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          visible={childrenDrawer}
        >
          {ComponentContentChildDrawer}
        </Drawer>
        {/* Nội dung thay đổi của drawer */}
        {ComponentContentDrawer}

    </Drawer>
</>
  )
}
