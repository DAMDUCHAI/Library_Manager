import React from 'react'
import styleLoading from './LoadingComponent.module.css';
import { useSelector } from 'react-redux'

export default function LoadingComponents() {

    const { isLoading } = useSelector(state => state.loadingReducers)

    if (isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={require('../../assets/imgLoading/loading.gif')} />
            </div>
        )
    } else {
        return ''
    }
}
