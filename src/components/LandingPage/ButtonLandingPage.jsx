function ButtonLandingPage(props) {
  const { mode } = props;

  let buttonStyle;
  if (mode === "light") {
    buttonStyle = { ...Styles.default, ...Styles.light };
  } else {
    buttonStyle = { ...Styles.default, ...Styles.dark };
  }

  return (
    <button
      style={buttonStyle}
      type="button"
    >
      {props.name}
    </button>
  );
}

const Styles = {
  default: {
    margin:'1em 0',
    padding: '1em 0',
    width: '100%',
    fontSize: '1.25em',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '1em',
  },
  dark: {
    color: '#fff',
    backgroundColor: '#C4C4C4',
  },
  light: {
    color: '#938F8F',
    backgroundColor: '#fff',
    border: '1px solid #938F8F'
  }
};

export default ButtonLandingPage;
