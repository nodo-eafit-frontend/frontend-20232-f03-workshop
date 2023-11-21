// import PropTypes from 'prop-types';

import Input from '../../atoms/Input/Input.jsx';
import Result from '../../atoms/Result/Result.jsx';
import './styles.scss';

const namespace = 'screen';

const Screen = () => {
  return (
    <section className={namespace}>
      <Input  />
      <Result  />
    </section>
  );
};

// Screen.propTypes = {
// operations: PropTypes.string,
// };


export default Screen