function makeRepeated(arr, repeats) {
	return Array.from({ length: repeats }, () => arr).flat()
}

export const bookList = makeRepeated([
	{
		name: '教你做人',
		author: '贾鱼村',
		press: '清清大学出版社'
	}, {
		name: '修仙日记',
		author: '风清扬',
		press: '电子手工业出版社'
	}, {
		name: '做男人如何保护好自己的发际线',
		author: '扫地增',
		press: '人人邮电出版社'
	}, {
		name: '大学没压力',
		author: '混世膜王',
		press: '轮子出版社'
	}], 4)

