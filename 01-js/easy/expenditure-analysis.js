/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let expenditure = new Map()
  for (let i = 0; i < transactions.length; i++) {
    let curr_category = transactions[i].category
    let curr_price = transactions[i].price
    if (expenditure.has(curr_category)) {
      expenditure.set(curr_category, expenditure.get(curr_category) + curr_price)
    }
    else {
      expenditure.set(curr_category, curr_price)
    }
  }
  let result = []
  expenditure.forEach((value, key) => {
    result.push({ category: key, totalSpent: value })
  })

  return result;
}

module.exports = calculateTotalSpentByCategory;
