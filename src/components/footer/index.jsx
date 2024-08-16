import PropTypes from 'prop-types';

import { skeleton } from '../../helpers/utils';

const Footer = ({ content, loading }) => {
  if (!content) return null;

  return (
    <div>
    </div>
  );
};

Footer.propTypes = {
  content: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default Footer;
