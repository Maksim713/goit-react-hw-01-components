import { Container } from '../Container/Container';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <Container>
        <h2 className={css.title}>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
};
