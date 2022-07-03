import axios from "axios";

export async function subgraphQuery(query) {
  try {
    const SUBGRAPH_URL =
      "https://api.thegraph.com/subgraphs/name/maguroid/learnweb3";
    const res = await axios.post(SUBGRAPH_URL, {
      query,
    });

    if (res.data.errors) {
      console.error(res.data.errors);
      throw new Error(`Error making subgraph query ${res.data.errors}`);
    }

    return res.data.data;
  } catch (err) {
    console.error(err);
    throw new Error(`Could not query the subgraph ${err.message}`);
  }
}
