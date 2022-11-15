import React, { useState } from 'react'
import { Button } from 'antd';
type Props = {
    title: string
}

const ButtonComponent = (props: Props) => {
    const { title } = props
    return (
        <Button type='primary'>{title}</Button>
    )
}

export default ButtonComponent