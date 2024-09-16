export { Col } from "@peersyst/react-components";

// Cannot use the types from @peersyst/react-components as TSC complains about the way pnpm handles dependencies
// @see: https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
export type { ColProps } from "@peersyst/react-components/@types/Col/Col.types";
