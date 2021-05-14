console.log('test is coming')

const header = $('header.site-header').parent()

header.prepend('<div>Hello World!!</div>')
  .css({
    'background-color': 'orange',
    'text-align': 'center'
  })
