import React, { useState } from 'react'
import { Input } from 'antd'
import { useDebounce } from 'react-use'
import { PageSegueEvent } from '../event'
import { useAppContext } from '../hook'
import { PageKeys } from '../page'

const { Search } = Input

const searchDebounceTime = 300

export default function SearchInput({ inHeader = false }) {
	const [searchInputedValue, setSearchInputedValue] = useState('')
	const { dispatch } = useAppContext()

	useDebounce(
		() => {
			if (searchInputedValue)
				dispatch(new PageSegueEvent({
					target: PageKeys.SEARCH,
					data: { value: searchInputedValue }
				}))
		},
		searchDebounceTime,
		[searchInputedValue]
	);

	return <Search
		placeholder={`图书搜索${inHeader ? "、高级搜索" : ""}`}
		style={{ ...inHeader && { width: '25vw' }, marginRight: '1rem' }}
		value={searchInputedValue}
		onChange={({ target: { value } }) => {
			setSearchInputedValue(value)
		}}
		onFocus={() => {
			if (inHeader) dispatch(new PageSegueEvent({
				target: PageKeys.SEARCH,
				data: { value: null }
			}))
		}}
		onSearch={value => {
			setSearchInputedValue('')
			dispatch(new PageSegueEvent({
				target: PageKeys.SEARCH,
				data: { value: searchInputedValue }
			}))
		}}
		enterButton />
}