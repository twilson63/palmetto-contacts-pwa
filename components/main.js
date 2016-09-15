module.exports = hx => {
  const Contacts = require('./contacts')(hx)
  return state =>
  hx`
<main class="cf pa3 pa4-m pa5-l mw9 center animated fadeInUp">
  ${[
    state.type === 'contact' && state.action === 'findAll' ? Contacts(state) : null
  ]}
</main>
`
}