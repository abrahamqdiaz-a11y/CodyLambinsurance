"use client";

import { useEffect } from "react";

const FORM_ID = "rWiDQWwxsiwM1QJpAqId";
const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export default function HighLevelForm() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ minHeight: "970px" }}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact form"
        data-height="970"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        title="Contact form"
      />
    </div>
  );
}
