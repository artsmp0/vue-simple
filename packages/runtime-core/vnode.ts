export type VNodeTypes = string | typeof Text;

export const Text = Symbol();

export interface VNode<HostNode = any> {
  type: VNodeTypes;
  props?: VNodeProps | null;
  children: VNodeNormalizedChildren;
  el?: HostNode;
}

export interface VNodeProps {
  [key: string]: any;
}

export type VNodeNormalizedChildren = string | VNodeArrayChildren;
export type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;

export type VNodeChild = VNodeChildAtom | VNodeArrayChildren;
type VNodeChildAtom = VNode | string;

export function createVNode(
  type: VNodeTypes,
  props: VNodeProps | null,
  children: VNodeNormalizedChildren
): VNode {
  const vnode: VNode = { type, props, children, el: undefined };
  return vnode;
}

export function normalizeVNode(child: VNodeChild): VNode {
  if (typeof child === "object") {
    return { ...child } as VNode;
  } else {
    return createVNode(Text, null, String(child));
  }
}

export function h(
  type: string,
  props: VNodeProps,
  children: (VNode | string)[]
) {
  return createVNode(type, props, children);
}
