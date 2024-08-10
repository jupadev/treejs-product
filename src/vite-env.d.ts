/// <reference types="vite/client" />
import { useGLTF } from "@tresjs/cientos"
declare module "@tresjs/cientos" {
  export const useGLTF = (path: string, options?: Record<string, any>) => any;
}
