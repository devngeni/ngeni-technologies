import styled from "styled-components";
import { Grid, Header } from "../commons";
import { GridFlow } from "../commons/LeftGrid";
import { ServiceHeader } from "./Service.Styles";
interface BlogProps {
  background: string;
  color: string;
}
export const BlogGrid = styled(Grid)`
  grid-gap: 120px;
`;
export const BlogHeader = styled(ServiceHeader)`
  color: #41bfb3;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const BlogTitle = styled(Header)`
  font-size: 18px;
`;
export const BlogWrapper = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    img {
      width: 95%;
      height: 100%;
    }
  }
`;
export const BlogButtons = styled.button<BlogProps>`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;
  border: none;
  cursor: pointer;
  width: fit-content;
`;

export const ButtonFlow = styled(GridFlow)`
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: start;
  }
`;
