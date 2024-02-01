import { RendererOptions } from "../runtime-core/renderer";
import { patchAttr } from "./modules/attrs";
import { patchEvent } from "./modules/events";

type DOMRendererOptions = RendererOptions<Node>;

const onRE = /^on[^a-z]/;
export const isOn = (key: string) => onRE.test(key);

export const patchProp: DOMRendererOptions["patchProp"] = (
  el: Element,
  key,
  value
) => {
  if (isOn(key)) {
    patchEvent(el, key, value);
  } else {
    patchAttr(el, key, value);
  }
};
