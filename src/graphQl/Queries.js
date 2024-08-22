import { gql } from "@apollo/client";
export const GET_BLOGS = gql`
  query 
  {
    blogs(organizationId: 2){
    id
    title
    content
    organizationId
    status
   }
  }
`;