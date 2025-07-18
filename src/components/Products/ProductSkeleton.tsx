import { Box, Skeleton, BoxProps } from "@mui/material";
import { palette } from "../../../theme/palette";

interface ProductSkeletonProps extends Omit<BoxProps, 'sx'> {
  height?: number;
  imageHeight?: number;
  textLines?: number;
}

const ProductSkeleton = ({
  height = 294,
  imageHeight = 150,
  textLines = 3,
  ...boxProps
}: ProductSkeletonProps) => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    backgroundColor: palette.gray,
    borderRadius: "10px",
    gap: "12px",
    cursor: "pointer",
    minHeight: `${height}px`,
    padding: "12px",
  };

  const skeletonStyles = {
    borderRadius: "10px",
  };

  const imageSkeletonStyles = {
    ...skeletonStyles,
    marginBottom: "12px",
  };

  const renderTextSkeletons = () => {
    return Array.from({ length: textLines }, (_, index) => (
      <Skeleton
        key={index}
        variant="rectangular"
        width="100%"
        height={16}
        sx={skeletonStyles}
      />
    ));
  };

  return (
    <Box sx={containerStyles} {...boxProps}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={imageHeight}
        sx={imageSkeletonStyles}
      />
      {renderTextSkeletons()}
    </Box>
  );
};

export default ProductSkeleton;
