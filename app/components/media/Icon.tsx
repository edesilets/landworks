import landworksColor from '../../assets/landworks-color.png';

export function Icon({ }: {}) {
  return (
    <div className='container-icon' style={{ width:'20%', height: '2em', border: '2px solid red', overflow: 'visible'}}>
      <img src={landworksColor} alt="Landworks Logo" style={{ maxWidth: '100%', height:'auto'}} />
    </div>
  );
}

export default Icon;