import { getClient } from "@/lib/apollo/apolloClient";
import { gql } from "@apollo/client";

// Query API using Apollo Client, for server components
export async function loadData() {
  const { data } = await getClient().query({
    query: gql`
      query {
        characters(page: 2) {
          results {
            id
            name
            image
          }
        }
      }
   `,
  });
  return data.characters.results
}

const query = `
  query {
          characters(page: 2) {
            results {
              id
              name
              image
            }
          }
      }
  `

export async function fetchData () {

  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query
    }),
  });

  const result = await response.json();
  console.log(result.data.characters.results);
  return result.data.characters.results
};