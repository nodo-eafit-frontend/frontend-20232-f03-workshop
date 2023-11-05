import './screen.scss';

const namespace = 'screen';

const Screen = () => {
  return (
    <article className={namespace}>
      <div className="previous-op">12 + 34</div>
      <div className="current-op">46</div>
    </article>
  );
};

export default Screen;