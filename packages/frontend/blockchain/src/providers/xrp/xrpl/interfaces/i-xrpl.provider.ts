import { XrplXChainSignerProvider } from "xchain-sdk";
import { IXrpProvider } from "../../interfaces/i-xrp.provider";

export interface IXrplProvider extends IXrpProvider, XrplXChainSignerProvider {}
