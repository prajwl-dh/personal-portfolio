import ScrollToTop from 'react-scroll-to-top';

export default function ScrollToTheTop() {
  return (
    <ScrollToTop
      smooth
      top='200'
      width='40'
      height='30'
      style={{
        marginBottom: '40px',
        backgroundColor: '#fffffc',
        outline: '4px white solid',
        borderRadius: '50%',
        cursor: 'pointer',
      }}
    />
  );
}
