import './styles.css';

interface Props {
  children:  JSX.Element | JSX.Element[],
  title: string;
}

const Container = ({ children, title }: Props) => {
  return (
    <div className='contrainer'>
      <div className='contrainer__title'>{title}</div>
      <div className='contrainer_list'>{children}</div>
    </div>
  )
};

export default Container;