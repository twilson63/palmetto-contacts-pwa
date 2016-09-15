const toPull = require('pull-promise')

module.exports = db => toPull.through(function (data) {
  // findAll
  if (data.type && data.action === 'findAll') {
//     return db.query('docs/type', { key: 'contacts', include_docs: true})
//       .then(res => res.rows.map(r => r.doc))
    return db.allDocs({include_docs: true})
      .then(res => res.rows.map(r => r.doc))
      .then(docs => Object.assign({docs}, data))
  }
  
  // add
  if (data.type && data.action === 'add') {
    return db.post(Object.assign({type: data.type}, data.properties))
      .then(res => Object.assign({
        _id: res.id,
        _rev: res.rev
      }, data.properties))
  }
  
  // find
  if (data.type && data.action === 'find') {
    return db.get(data.id)
  }
  
  if (data.type && data.action && data.action === 'update') {
    return db.put(data.properties)
      .then(res => Object.assign({
        _rev: res.rev
      }, data.properties))
  }
  
  // remove
  if (data.type && data.action && data.action === 'remove') {
    return db.remove(data.id, data.rev)
  }
  
  return Promise.resolve(data)
})