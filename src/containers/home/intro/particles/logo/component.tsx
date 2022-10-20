import Circles from './circles';

const ParticlesLogo = () => {
  return (
    <group>
      {/* Green dots */}
      <Circles count={12} size={2.5} color={0x00cc99} radius={100} startAngle={45} />
      <Circles count={12} size={2.5} color={0x00cc99} radius={100} startAngle={45} />
      <Circles count={12} size={2.5} color={0x00cc99} radius={100} startAngle={45} />

      {/* Blue light dots */}
      <Circles count={12} size={5} color={0x4fb8da} radius={80} startAngle={0} />
      <Circles count={12} size={2.5} color={0x4fb8da} radius={80} startAngle={0} />
      <Circles count={12} size={2.5} color={0x4fb8da} radius={80} startAngle={0} />

      {/* Blue dark dots */}
      <Circles count={12} size={2.5} color={0x2078ac} radius={60} startAngle={45} />
      <Circles count={12} size={2.5} color={0x2078ac} radius={60} startAngle={45} />
      <Circles count={12} size={2.5} color={0x2078ac} radius={60} startAngle={45} />

      {/* Beige dots */}
      <Circles count={12} size={5} color={0xf0ede8} radius={40} startAngle={0} />
      <Circles count={12} size={2} color={0xf0ede8} radius={40} startAngle={0} />

      {/* Red dots */}
      <Circles //
        count={1}
        size={10}
        color={0xe23248}
        radius={0}
        startAngle={0}
      />

      <Circles //
        count={10}
        size={2}
        color={0xe23248}
        radius={1}
        startAngle={0}
      />
    </group>
  );
};

export default ParticlesLogo;
