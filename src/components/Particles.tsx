import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";
import { Container, tsParticles } from "tsparticles-engine";

export default function ParticlesComponent() {
  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(tsParticles);
  };

  const particlesLoaded = async (container: Container) => {};

  return (
    <Particles
      id="tsparticles"
      url="https://arweave.net/6UEENHP4jbwsP4yt7ueMXo4GTsrDu8VuINxKUBmpdsA"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particlesstyle"
    />
  );
}
