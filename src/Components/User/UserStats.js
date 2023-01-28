import React from "react";
import { STATS_GET } from "../../constants";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  const [noData, setNoData] = React.useState(false);
  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      const { json } = await request(url, options);
      if (json.length === 0) {
        setNoData(true);
      }
      console.log("JSON", json.length);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (noData) {
    return <div>Não tem informação</div>;
  }
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas"></Head>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
