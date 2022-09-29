import Circles from './circles';

const ParticlesLogo = () => {
  return (
    <>
      <Circles count={1} size={10} color={0xfc1a52} radius={0} startAngle={0} />
      <Circles count={12} size={5} color={0xffffff} radius={40} startAngle={0} />
      <Circles count={12} size={2.5} color={0x0079d0} radius={60} startAngle={45} />
      <Circles count={12} size={5} color={0x02c6ec} radius={80} startAngle={0} />
      <Circles count={12} size={2.5} color={0x1deabd} radius={100} startAngle={45} />
    </>
  );
};

export default ParticlesLogo;
