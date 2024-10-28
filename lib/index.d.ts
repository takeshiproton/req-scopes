declare namespace is {
    function existy<T>(value: T | null | undefined): value is NonNullable<T>;
    function not<T>(predicate: (value: T) => boolean): (value: T) => void;
    function ip(value: string): value is string & { __isIP: true };
  }
  
  declare function validateIP(): void;
  
  interface IP {
    __isIP: true;
  }
  
  declare function getClientIpFromXForwardedFor(value: string | null): IP | null;
  
  declare function getClientIp(req: Request): IP | null;
  
  interface Options {
    attributeName?: string;
  }
  
  declare function mw(options?: Options): any;
  
  interface ClientIpModule {
      getClientIpFromXForwardedFor: typeof getClientIpFromXForwardedFor;
      getClientIp: typeof getClientIp;
      mw: typeof mw;
    }
    
    declare module 'express-request-ip' {
      const Module: ClientIpModule;
      export default Module;
    }
  