// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
const faunadb = require('faunadb')
const q = faunadb.query

export function handler(event, context, callback) {

  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  })

  const date = new Date()
  const todoItem = {
    data: "hello world " + date.getSeconds()
  }

  // client.query(q.Create(q.Ref('classes/todos'), todoItem))
  client.query(
    q.Create(
      q.Collection('todos'),
      { data: { title: 'What I had for breakfast ..' } },
    )
  )
    .then(response => {
      console.log('success, line 18')
    })
    .catch(response => {
      console.log('failure, line 21')
      console.log(response)
    })
}

/*

callback(null, {
        // return null to show no errors
        statusCode: 200, // http status code
        body: JSON.stringify({
          msg: JSON.stringify(todoItem),
        })
      })

*/

/*

client.query(q.Create(q.Ref('classes/todos'), todoItem))
    .then((response) => {
      console.log('success', response)

      callback(null, {
        // return null to show no errors
        statusCode: 200, // http status code
        body: 'success',
      })
    }).catch((error) => {
      console.log('error', error)
      callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })

      */

/*

todo:

test if TS works here

*/