import { supabase } from "../lib/supabaseClient";

export default async function SignatureStats() {
  const { count: totalSignatures } = await supabase
    .from("signatures")
    .select("*", { count: "exact", head: true });

  const { data: countries } = await supabase
    .from("country_ranking")
    .select("*")
    .limit(5);

  const countryCount = countries?.length || 0;

  return (
    <>
      <div><b>{totalSignatures || 0}</b><span>Verified Signatures</span></div>
      <div><b>{countryCount}</b><span>Countries</span></div>
      <div><b>ACTIVE</b><span>Case Status</span></div>
      <div><b>1M</b><span>Objective</span></div>
    </>
  );
}
