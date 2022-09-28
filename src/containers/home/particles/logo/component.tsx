import Circles from './circles';

const ParticlesLogo = () => {
  return (
    <>
      <Circles //
        count={12}
        size={10}
        color={[1, 1, 1]}
        radius={40}
        startAngle={0}
      />
      <Circles //
        count={12}
        size={5}
        color={[0, 121 / 255, 208 / 255]}
        radius={60}
        startAngle={45}
      />
      <Circles
        count={12}
        size={10}
        color={[2 / 255, 198 / 255, 236 / 255]}
        radius={80}
        startAngle={0}
      />
      <Circles
        count={12}
        size={5}
        color={[29 / 255, 234 / 255, 189 / 255]}
        radius={100}
        startAngle={45}
      />
    </>
  );
};

export default ParticlesLogo;
