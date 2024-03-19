export type DotNotation<T> = T extends string | number | Date
  ? []
  : {
      [K in keyof T]: [K, ...DotNotation<T[K]>];
    }[keyof T];

export type Join<T extends string[], D extends string | number> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string | number
    ? `${F}${D}${Join<Extract<R, string[]>, D>}`
    : never
  : string | number;

export type DeepLinkConfigHandlersObj = {
  join_group: {
    token: string;
  };
  reset_password: {
    token: string;
    email: string;
  };
};
export type DeepLinkConfigHandlers = keyof DeepLinkConfigHandlersObj;

export type DeepLinkConfig<T extends DeepLinkConfigHandlers = DeepLinkConfigHandlers> = {
  handler: T extends never ? DeepLinkConfigHandlers : T;
  value: DeepLinkConfigHandlersObj[T];
};
