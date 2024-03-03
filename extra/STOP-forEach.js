const array = [1, 2, 3, 4, 5]

try {
  array.forEach((number) => {
    console.log("number:", number)
    if (number === 3) {
      throw new Error('Ops. Stoping loop')
    }
  })
} catch (err) {
  console.log('error:', err.message)
}