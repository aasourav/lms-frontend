import { down, up } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

export const useBreakPoints = () => {
  const downXs = useBreakpoint(down("xs"));
  const downSm = useBreakpoint(down("sm"));
  const downMd = useBreakpoint(down("md"));
  const downSl = useBreakpoint(down("sl"));
  const downLg = useBreakpoint(down("lg"));
  const downXl = useBreakpoint(down("xl"));
  const upXs = useBreakpoint(up("xs"));
  const upSm = useBreakpoint(up("sm"));
  const upMd = useBreakpoint(up("md"));
  const upSl = useBreakpoint(up("sl"));
  const upLg = useBreakpoint(up("lg"));
  const upXl = useBreakpoint(up("xl"));
  return {
    downXs,
    downSm,
    downMd,
    downLg,
    downSl,
    downXl,
    upXs,
    upSm,
    upMd,
    upSl,
    upLg,
    upXl,
  };
};
