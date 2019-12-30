import React from 'react'
import { } from 'antd'
import { useAppContext } from '../hook'

export default function BookModifyPage() {
	const { modifyingBookId, dispatch } = useAppContext()

	return <div>图书修改 - {modifyingBookId}</div>
}