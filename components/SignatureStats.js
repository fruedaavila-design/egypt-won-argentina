import { supabase } from "../lib/supabaseClient";

export default async function SignatureStats() {
  const { count } = await supabase
    .from("signatures")
    .select("*", { count: "exact", head: true });

  const { data: countries } = await supabase
    .from("country_ranking")
    .select("*")
    .limit(5);

  return (
    <section className="signatureStats">
      <div>
        <span>Total verified signatures</span>
        <strong>{count || 0}</strong>
      </div>

      <div>
        <span>Top countries</span>
        <ul>
          {(countries || []).map((item) => (
            <li key={item.country}>
              <b>{item.country}</b>
              <em>{item.signatures}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
