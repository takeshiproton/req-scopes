/// <reference types="node" />

interface ClientInspectorService {
  init(): void;
  inspect(request: any): Promise<any>;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: string;
  }
}

declare const __awaiter: (this: unknown, _arguments: any[], P: any, generator: any) => any;

declare module 'ip' {
  export function isV4Format(ipAddress: string): boolean;
  export function isV6Format(ipAddress: string): boolean;
}

declare module './core/services/client-inspector.service';

declare function clientUse(): any;
declare function clientIpValidator(reqIp: string): boolean;
declare function clientInspector(request: any): Promise<any>;

export { clientUse, clientIpValidator, clientInspector };
