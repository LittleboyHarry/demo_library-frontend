import React from 'react';
import { useMockableJsonFetch } from './../hook'
import { Row, Col, Card, Typography, Skeleton, Button, Result, Empty } from 'antd';
import * as MockData from '../MockData'

const gap = 12
const gutter = [gap, gap]

export default function () {
	// TODO: 增加图书分页查询功能	

	const { loading, success, data } = useMockableJsonFetch('所有图书', {
		url: '/api/book/get',
	}, [], MockData.bookList)

	return <div style={{ userSelect: 'none' }}>
		<Typography.Title level={2} children="书库大全" style={{ textAlign: 'center' }} />
		<Skeleton active {...{ loading }}>
			{
				success ?
					data.length > 0 ?
						<Row type="flex" {...{ gutter }}>
							{
								data.map((book, key) =>
									<Col xs={24} sm={8} md={6} {...{ key }}>
										<Card type="inner" title={book.name}>
											<p>作者：{book.author}</p>
											<p>出版社：{book.press}</p>
										</Card>
									</Col>
								)
							}
						</Row>
						: <Empty style={{ padding: '3rem 0' }} description="图生馆维护中 ……" />
					: <Result
						status="error"
						title="网络异常"
						subTitle="请稍后重试"
						extra={
							<Button type="danger" icon="reload" onClick={() => { window.location.reload() }}>刷新</Button>}
					/>
			}
		</Skeleton>
	</div >
}
