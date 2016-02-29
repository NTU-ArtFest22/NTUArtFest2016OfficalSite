const data = [
	{
		name: 'product1',
		productname: 'Collection',
		description: 'Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.'
	},
	{
		name: 'product2',
		productname: 'Postercard',
		description: 'Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.'
	},
	{
		name: 'product3',
		productname: 'hahaha',
		description: 'Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.'
	}

]

const dataMap = data.reduce(function (map, product) {
  
  map[product.name] = product
  return map
}, {})

exports.lookupProduct = function (name) {
  return dataMap[name]
}