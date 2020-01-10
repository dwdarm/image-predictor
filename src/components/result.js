import image from './image';
import table from './table';

const result = props => {
  return `
    <div>
      <h1 class="title is-4 has-text-centered">Result</h1>
      <div class="columns">

        <div class="column is-three-fifths">
          ${image(props.image)}
        </div>

        <div id="list-result" class="column">
          ${table(props.table)}
        </div>

      </div>
    </div>
  `;
}

export default result;