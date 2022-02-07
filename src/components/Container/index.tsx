import './styles.css';

interface Props {
  className?: string;
  children:  JSX.Element | JSX.Element[],
  title: string;
}

const Container = ({ className, children, title }: Props) => {
  return (
    <div className={`${className} contrainer`}>
      <div className='contrainer__title'>{title}</div>
      <div className='contrainer_list'>{children}</div>
    </div>
  )
};

export default Container;