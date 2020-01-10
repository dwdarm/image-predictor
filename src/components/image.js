const image = props => {
  return `
    <figure class="image">
      <img src=${props.url} alt=${props.alt}>
    </figure>
  `
} 

export default image;