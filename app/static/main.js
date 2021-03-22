$(window).on('load', function() {

  const toInvestBTC = $('#to_invest_btc')
  const inPriceBTC = $('#in_price_btc')
  const percentage = $('#percentage')
  const outPriceBTC = $('#out_price_btc')
  const profitBTC = $('#profit_btc')
  const toInvestUSD = $('#to_invest_usd')
  const inPriceUSD = $('#in_price_usd')
  const outPriceUSD = $('#out_price_usd')
  const profitUSD = $('#profit_usd')

  const writableFields = [
      toInvestBTC,
      inPriceBTC,
      percentage,
      outPriceBTC
  ]

  for(i=0; i<writableFields.length; i++){
    const field = writableFields[i][0]
    field.addEventListener("keydown", event => {
        updateFields(field)
        console.log('updated')
    })
  }

});


function updateFields(updatedField) {
  const toInvestBTC = $('#to_invest_btc')
  const inPriceBTC = $('#in_price_btc')
  const percentage = $('#percentage')
  const outPriceBTC = $('#out_price_btc')
  const profitBTC = $('#profit_btc')

  const priceDifference = inPriceBTC.val() - outPriceBTC.val()

  switch(updatedField.id) {
    case 'to_invest_btc':
    case 'in_price_btc':
    case 'out_price_btc':
      percentage.val(outPriceBTC.val() * 100 / inPriceBTC.val())
      break;
    case 'percentage':
      outPriceBTC.val(percentage.val() * priceDifference)
  }
  profitBTC.val(toInvestBTC.val() * priceDifference)
}

