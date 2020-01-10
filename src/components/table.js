const table = props => {
  
  let data = '';
  props.data.forEach(item => {
    data += `
    <tr>
      <td>${item.name}</td>
      <td>${item.value}</td>
    </tr>
    `
  });

  return `
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        ${data}
      </tbody>
    </table>
  `
}

export default table;