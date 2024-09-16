import styled from "styled-components";
import { Image } from "../../display/image";

const IMAGE_SIZE = "1.75rem";

export const SelectItemImage = styled(Image)`
    min-width: ${IMAGE_SIZE};
    max-width: ${IMAGE_SIZE};
    min-height: ${IMAGE_SIZE};
    max-height: ${IMAGE_SIZE};
    border-radius: 50%;
`;
