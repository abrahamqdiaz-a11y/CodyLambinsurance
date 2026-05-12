"use client";

import { useEffect } from "react";

const FORM_ID = "rWiDQWwxsiwM1QJpAqId";

export default function HighLevelForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
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
  );
}
