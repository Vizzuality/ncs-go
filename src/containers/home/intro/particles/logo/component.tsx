import Circles from './circles';

const ParticlesLogo = () => {
  return (
    <group>
      {/* Green dots */}
      <Circles count={12} size={2.5} color={0x1deabd} radius={100} startAngle={45} />
      <Circles count={12} size={2.5} color={0x1deabd} radius={100} startAngle={45} />
      <Circles count={12} size={2.5} color={0x1deabd} radius={100} startAngle={45} />

      {/* Blue light dots */}
      <Circles count={12} size={5} color={0x02c6ec} radius={80} startAngle={0} />

      {/* Blue dark dots */}
      <Circles count={12} size={2.5} color={0x0079d0} radius={60} startAngle={45} />
      <Circles count={12} size={2.5} color={0x0079d0} radius={60} startAngle={45} />
      <Circles count={12} size={2.5} color={0x0079d0} radius={60} startAngle={45} />

      {/* White dots */}
      <Circles count={12} size={5} color={0xffffff} radius={40} startAngle={0} />
      <Circles count={12} size={2} color={0xffffff} radius={40} startAngle={0} />

      {/* Red dots */}
      <Circles //
        count={1}
        size={10}
        color={0xfc1a52}
        radius={0}
        startAngle={0}
      />

      <Circles //
        count={10}
        size={2}
        color={0xfc1a52}
        radius={1}
        startAngle={0}
      />
    </group>
  );
};

export default ParticlesLogo;
