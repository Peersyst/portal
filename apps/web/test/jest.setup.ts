// Set jest global
import { jest as baseJest } from "@jest/globals";
const globalJest = baseJest as unknown as typeof jest;
globalJest.mockModule = baseJest.unstable_mockModule as any;
global.jest = globalJest;
