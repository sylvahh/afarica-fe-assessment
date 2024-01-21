type SPINNER = 'default' | 'mini' | 'simple';
const spinner = (spinType: SPINNER = 'default') => {
  const simpleSpiner = <div className="loader"></div>;

  const miniSpinner = (
    <div className='relative w-full h-[100%] flex items-center justify-center'>
    <div className='lds-small-spinner flex items-center justify-center w-full'>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index}></div>
      ))}
    </div>
    </div>
  );

  const defaultSpinner = (
    <div className='relative w-full h-screen flex items-center justify-center'>
      <div className='lds-spinner'>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
  switch (spinType) {
    case 'simple':
      return simpleSpiner;
    case 'mini':
      return miniSpinner;
    default:
      return defaultSpinner;
  }
};
export default spinner;
