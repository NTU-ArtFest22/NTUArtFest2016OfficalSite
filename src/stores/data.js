const data = [
	{
		name: 'product1',
		description: 'aaa'
	}.
	{
		name: 'product2',
		description: 'bbb'
	}.
	{
		name: 'product3',
		description: 'ccc'
	}

]

const dataMap = data.reduce(function (map, product) {
  category.itemsMap = category.items.reduce(function (itemsMap, item) {
    itemsMap[item.name] = item
    return itemsMap
  }, {})
  map[category.name] = category
  return map
}, {})

exports.lookupCategory = function (name) {
  return dataMap[name]
}