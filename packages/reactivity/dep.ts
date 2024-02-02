import { ReactiveEffect } from "./effect";

export type Dep = Set<ReactiveEffect>;

export const createDep = (effects?: ReactiveEffect[]): Dep => {
  const dep: Dep = new Set(effects);
  return dep;
};
