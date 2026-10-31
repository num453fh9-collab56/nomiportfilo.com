import { ImageResponse } from "next/og";

export const alt = "Numan Ali — Web Development, AI Agents & Meta Ads";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "linear-gradient(135deg, #E0F2FE 0%, #FFFFFF 45%, #FCE7F3 100%)",
          color: "#0F172A",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#0369A1",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              backgroundColor: "#0EA5E9",
              display: "flex",
            }}
          />
          Web Development · AI Agents · Meta Ads
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            marginTop: 32,
            letterSpacing: -3,
            lineHeight: 1.05,
          }}
        >
          Numan Ali
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#475569",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Frontend, backend, AI agents aur Meta Ads — apne karobar ke liye.
        </div>
      </div>
    ),
    size,
  );
}
