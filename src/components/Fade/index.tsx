'use client';
import { useMotion } from 'firemotion';
import React from 'react';
import { css } from '@plumeria/core';

const styles = css.create({
  base: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: 'all 0.4s',
    transform: 'none',
  },
  entry: {
    filter: 'blur(4px)',
    opacity: 0,
    transform: 'translateY(-4px)',
  },
});

export const Fade = ({ children }: { children: React.ReactNode }) => {
  const fade = useMotion(styles.base, { entry: styles.entry });
  return <div className={fade}>{children}</div>;
};
