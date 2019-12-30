import React, { useEffect } from 'react'
import { Result } from 'antd'
import { useLoginState, useAppContext } from '../hook'
import { PageSegueEvent } from '../event'
import { PageKeys } from './'

const jumpToLoginAfterSeconds = 3

export default function BookRecordPage({ loseFocus }) {
	const { isAdmin } = useLoginState()
	const { dispatch } = useAppContext()

	useEffect(() => {
		if (!loseFocus && !isAdmin)
			setTimeout(() => {
				dispatch(new PageSegueEvent({
					target: PageKeys.LOGIN
				}))
			}, jumpToLoginAfterSeconds * 1000)
	}, [loseFocus, isAdmin, dispatch])

	return isAdmin
		? <div>图书入库</div>
		: <Result
			status="warning"
			title="需要管理员登陆，才能录入图书"
		/>
}