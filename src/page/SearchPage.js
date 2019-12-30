import React from 'react'
import { useAppContext } from '../hook'
import { SearchInput } from '../component'

export default function SearchPage() {
	const { searchingValue, compactedLayout } = useAppContext()

	return <div>
		{compactedLayout && <SearchInput />}
		正在搜索 {searchingValue}
	</div>
}