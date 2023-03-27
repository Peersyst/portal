import { forwardRef } from "react";

const SvgMock = forwardRef((props, ref) => <span ref={ref} {...props} />);

export const ReactComponent = SvgMock;
export default SvgMock;
