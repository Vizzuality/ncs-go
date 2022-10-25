import Circles from './circles';

const ParticlesLogo = () => {
  return (
    <group>
      {/* Green dots */}
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={0} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={0} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={0} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={0} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={0} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={0} />
      <Circles count={5} size={10} color={0x40bb93} radius={90} startAngle={0} />

      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={36} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={36} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={36} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={36} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={36} />
      <Circles count={5} size={2.5} color={0x40bb93} radius={90} startAngle={36} />
      <Circles count={5} size={8} color={0x40bb93} radius={90} startAngle={36} />

      {/* Blue light dots */}
      <Circles count={5} size={2.5} color={0x4fb9db} radius={65} startAngle={-18} />
      <Circles count={5} size={2.5} color={0x4fb9db} radius={65} startAngle={-18} />
      <Circles count={5} size={2.5} color={0x4fb9db} radius={65} startAngle={-18} />
      <Circles count={5} size={2.5} color={0x4fb9db} radius={65} startAngle={-18} />
      <Circles count={5} size={2.5} color={0x4fb9db} radius={65} startAngle={-18} />
      <Circles count={5} size={7} color={0x4fb9db} radius={65} startAngle={-18} />

      {/* Blue dark dots */}
      <Circles count={5} size={2.5} color={0x2378ac} radius={65} startAngle={18} />
      <Circles count={5} size={2.5} color={0x2378ac} radius={65} startAngle={18} />
      <Circles count={5} size={2.5} color={0x2378ac} radius={65} startAngle={18} />
      <Circles count={5} size={2.5} color={0x2378ac} radius={65} startAngle={18} />
      <Circles count={5} size={2.5} color={0x2378ac} radius={65} startAngle={18} />
      <Circles count={5} size={7} color={0x2378ac} radius={65} startAngle={18} />

      {/* Beige dots */}
      <Circles count={5} size={7} color={0xf0ede8} radius={40} startAngle={36} />
      <Circles count={5} size={5.25} color={0xf0ede8} radius={40} startAngle={0} />

      {/* Red dots */}
      <Circles //
        count={1}
        size={8.5}
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
