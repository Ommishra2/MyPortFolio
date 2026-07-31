'use client';

import { ScrollyCanvas } from '../shared/scrolly-canvas';
import { Overlay } from '../shared/overlay';

export function ScrollyHero() {
  return (
    <section className="relative w-full bg-slate-950">
      <ScrollyCanvas />
      <Overlay />
    </section>
  );
}
