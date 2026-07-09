import "./GlobalHeatMap.css";
import { supabase } from "../../lib/supabaseClient";

export default async function GlobalHeatMap() {
  const { count: totalSignatures } = await supabase
    .from("signatures")
    .select("*", { count: "exact", head: true });

  const { data: countries } = await supabase
    .from("country_ranking")
    .select("*")
    .limit(8);

  const latest = countries?.[0];

  return (
    <section className="globalHeatMap">
      <div className="globalHeatIntro">
        <p>GLOBAL VERDICT</p>
        <h2>The world is recording its position.</h2>
      </div>

      <div className="heatMapLayout">
        <div className="heatMapVisual">
          <div className="heatDot dot1" />
          <div className="heatDot dot2" />
          <div className="heatDot dot3" />
          <div className="heatDot dot4" />
          <div className="heatDot dot5" />

          <span className="mapLabel">WORLD HEAT MAP</span>
        </div>

        <aside className="heatMapStats">
          <div>
            <span>Verified Signatures</span>
            <b>{totalSignatures || 0}</b>
          </div>

          <div>
            <span>Latest Stronghold</span>
            <b>{latest?.country || "Pending"}</b>
          </div>

          <div>
            <span>Target</span>
            <b>1,000,000</b>
          </div>

          <ul>
            {(countries || []).map((item) => (
              <li key={item.country}>
                <span>{item.country}</span>
                <b>{item.signatures}</b>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}