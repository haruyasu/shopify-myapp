import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const CREATE_SCRIPT_TAG = gql`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

class ScriptPage extends React.Component {
  render() {
    return (
      <div>
        <h1>test</h1>
        aaaa
      </div>
    );
  }
}

export default ScriptPage;
