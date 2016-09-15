module.exports = hx => 
  state => {
    const li = v => hx`<li>${v.name}</li>`
    return hx`
<div>
  <div class="fl">
    <a class="btn" href="/contacts/new">Add Contact</a>
  </div>
  <h1>Contacts</h1>
  <ul class="list">${state.docs.map(li)}</ul>
</div>
`
}