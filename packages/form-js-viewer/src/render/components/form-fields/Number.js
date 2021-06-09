import Description from '../Description';
import Errors from '../Errors';
import Label from '../Label';

import {
  formFieldClasses,
  prefixId
} from '../Util';

import { generateIdForType } from '../../../util';

const type = 'number';

export default function Number(props) {
  const {
    disabled,
    errors = [],
    field,
    path,
    value
  } = props;

  const {
    description,
    id,
    label,
    validate = {}
  } = field;

  const { required } = validate;

  const onChange = ({ target }) => {
    props.onChange({
      path,
      value: target.value ? parseInt(target.value, 10) : undefined
    });
  };

  return <div class={ formFieldClasses(type, errors) }>
    <Label
      id={ prefixId(id) }
      label={ label }
      required={ required } />
    <input
      class="fjs-input"
      disabled={ disabled }
      id={ prefixId(id) }
      onInput={ onChange }
      type="number"
      value={ value } />
    <Description description={ description } />
    <Errors errors={ errors } />
  </div>;
}

Number.create = function(options = {}) {
  const id = generateIdForType(type);

  return {
    id,
    key: id,
    label: this.label,
    type,
    ...options
  };
};

Number.type = type;

Number.label = 'Number';